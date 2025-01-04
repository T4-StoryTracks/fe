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
    <div className="relative aspect-square overflow-hidden rounded-lg bg-[#262626]">
      {!value && !isFocused && (
        <div
          className="text-black-tertiary absolute left-0 top-0 flex flex-col gap-2 p-4"
          onClick={handleFocus}
        >
          <p className="text-[15px] tracking-tight">
            Tell us a little story about this image! We'll handle the rest to
            generate the perfect blog content.
            <br />
            <br />
            For example: 'A serene beach at sunset, with golden skies and waves
            gently lapping at the shore.'
          </p>
        </div>
      )}
      <textarea
        ref={textareaRef}
        name="description"
        id="description"
        className="aspect-square w-full rounded-lg bg-[#262626] p-5"
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
                             console.log("Event object:", e); // 이벤트 객체 자체를 출력
                             console.log("Current input value:", e.target.value); // 입력된 값 출력
                             setValue(e.target.value); // 상태 업데이트
                           }}
        value={value}
      />
    </div>
  );
}
