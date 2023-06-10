import React from 'react';

type OptionProps = {
  id: number;
  value: string | number;
  label: string;
};

interface Props {
  className?: string;
  options: OptionProps[];
  optionPrefix?: string;
  optionSuffix?: string;
  getSelectedOption?: (_: any) => void;
}

const DropDown: React.FunctionComponent<Props> = ({
  className,
  options,
  optionPrefix,
  optionSuffix,
  getSelectedOption,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0].value);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    getSelectedOption && getSelectedOption(event.target.value);
  };

  return (
    <div className="relative">
      <select
        {...props}
        role="select"
        className={[
          'w-full cursor-pointer text-ellipsis rounded-[6px] bg-white py-3 px-4 font-medium leading-[17.5px] text-slateLavender outline-none',
          className,
        ].join(' ')}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((opt: OptionProps) => (
          <option key={opt.id} value={opt.value}>
            {optionPrefix} {opt.label} {optionSuffix}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
