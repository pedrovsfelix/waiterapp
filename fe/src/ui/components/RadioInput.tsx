interface RadioInputProps {
  label: string;
  value: string;
  register: any;
  name: string;
}

export function RadioInput({ label, value, register, name }: RadioInputProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        {...register(name)}
        className="w-4 h-4 accent-primary"
      />
      <span>{label}</span>
    </label>
  );
}
