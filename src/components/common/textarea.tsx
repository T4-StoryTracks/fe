import { useRef, useState } from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export default function Textarea({ value, setValue }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
    textareaRef.current?.focus();
  };

  return (
    <div className="relative aspect-[7/5] overflow-hidden rounded-lg bg-[#262626]">
      {!value && !isFocused && (
        <div
          className="absolute left-0 top-0 flex flex-col gap-2 p-4 text-[#7A7A7A]"
          onClick={handleFocus}
        >
          <p className="text-[15px] tracking-tight">
            {`Tell us a little story about this image! We'll handle the rest to
            generate the perfect blog content.`}
            <br />
            <br />
            {`For example: 'A serene beach at sunset, with golden skies and waves
            gently lapping at the shore.'`}
          </p>
        </div>
      )}
      <textarea
        ref={textareaRef}
        name="description"
        id="description"
        className="h-full w-full rounded-lg bg-[#262626] p-5"
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
