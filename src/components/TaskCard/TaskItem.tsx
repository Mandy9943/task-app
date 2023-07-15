import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
const { Text, Link } = Typography;

interface IProps {
  label: string;
  isChecked: boolean;
  onComplete: (checked: boolean) => void;
  onDelete: () => void;
}

const TaskItem = ({ isChecked, label, onComplete, onDelete }: IProps) => {
  const onChangeValue = (e: CheckboxChangeEvent) => {
    onComplete(e.target.checked);
  };

  return (
    <div className="flex justify-between items-center max-w-lg">
      <Checkbox checked={isChecked} onChange={onChangeValue}>
        <Text delete={isChecked}>{label}</Text>
      </Checkbox>

      <DeleteOutlined className="cursor-pointer" onClick={onDelete} />
    </div>
  );
};

export default TaskItem;
