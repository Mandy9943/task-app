import { Button, Input, Typography } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
const { Text, Link } = Typography;

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .required("La descripción es requerida")
    .max(150, "La descripcion entrada es muy larga"),
});

interface IProps {
  onSubmit: (data: string) => void;
}

const AddTask = ({ onSubmit }: IProps) => {
  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (data, { resetForm }) => {
      onSubmit(data.description);
      resetForm();
    },
  });
  return (
    <form className="flex gap-1 flex-col" onSubmit={formik.handleSubmit}>
      <div className="flex gap-3">
        <Input
          className="w-full flex-1"
          placeholder="Escribe una tarea"
          onChange={formik.handleChange}
          name="description"
          value={formik.values.description}
          status={
            formik.touched.description && Boolean(formik.errors.description)
              ? "error"
              : undefined
          }
        />
        <Button style={{ width: 80 }} htmlType="submit">
          Enviar
        </Button>
      </div>
      {formik.errors.description && (
        <Text type="danger" className="text-xs">
          {formik.errors.description}
        </Text>
      )}
    </form>
  );
};

export default AddTask;
