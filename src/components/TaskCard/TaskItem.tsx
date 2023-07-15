import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

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
    <Checkbox checked={isChecked} onChange={onChangeValue}>
      {label}
    </Checkbox>
  );
};

export default TaskItem;
