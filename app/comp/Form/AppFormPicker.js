import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColums,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns = {numberOfColums}
        onSelectItem={(items) => setFieldValue(name, items)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
