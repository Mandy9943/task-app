import { Button, Input } from "antd";

const AddTask = () => {
  return (
    <div className="flex gap-3">
      <Input className="w-full flex-1" placeholder="Escribe una tarea" />
      <Button style={{ width: 80 }}>Enviar</Button>
    </div>
  );
};

export default AddTask;
