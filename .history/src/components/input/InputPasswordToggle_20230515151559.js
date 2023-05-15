import React, { Fragment } from "react";

const InputPasswordToggle = () => {
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Please enter your password"
        control={control}
      >
        {togglePassword ? (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        ) : (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
