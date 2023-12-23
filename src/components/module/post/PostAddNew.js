import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import { postStatus } from "utils/constants";
import ImageUpload from "components/image/ImageUpload";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { Radio } from "components/checkbox";
import useHandleImage from "hook/useHandleImage";
import Toggle from "components/toggle/Toggle";
import { Dropdown } from "components/dropdown";
import { useAuth } from "contexts/auth-context";
import { toast } from "react-toastify";

const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
  const { userInfo } = useAuth();
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      hot: false,
      image: "",
    },
  });

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const watchStatus = watch("status");
  const watchHot = watch("hot");
  // const watchCategory = watch("category");

  const addPostHandler = async (values) => {
    setLoading(true);
    console.log(
      "🚀 ~ file: PostAddNew.js:42 ~ addPostHandler ~ values:",
      values
    );
    try {
      const copyValues = { ...values };
      copyValues.slug = slugify(values.title || values.slug, { lower: true });
      copyValues.status = Number(values.status);
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...copyValues,
        image,
        userId: userInfo.uid,
        createAt: serverTimestamp(),
      });
      toast.success("Create new post successfully!!!");
      reset({
        title: "",
        slug: "",
        status: 2,
        categoryId: "",
        hot: false,
        image: "",
      });
      handleResetUpload();
      setCategory({});
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const {
    image,
    progress,
    handleResetUpload,
    handleSelectImage,
    handleDeleteImage,
  } = useHandleImage(setValue, getValues);

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setCategories(results);
    }
    getData();
  }, []);

  const handleClickOption = (item) => {
    setValue("categoryId", item.id);
    setCategory(item);
  };

  useEffect(() => {
    document.title = "MONKEY BLOGGING - ADD NEW POST";
  }, []);

  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              className="h-[250px]"
              progress={progress}
              image={image}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>
          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select your category?"></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {category?.name && (
              <span className="inline-block p-3 rounded-lg bg-green-100 text-green-600 text-sm font-medium">
                {category?.name}
              </span>
            )}
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Feature Post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[200px]"
          isLoading={loading}
          disable={loading}
        >
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
