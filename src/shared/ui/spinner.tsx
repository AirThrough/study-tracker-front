import { cn } from "~/shared/utils";
import { Loader2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SHARED_KEYS } from "../i18n/shared.keys";

export const UISpinner = ({
  className,
  text,
  ...props
}: React.ComponentProps<"svg"> & { text?: string }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-full w-full absolute top-0 left-0 bg-black/90 z-10">
      <p className="text-white text-sm mb-8">
        {text ?? t(SHARED_KEYS.LOADERS.LOADING)}
      </p>
      <Loader2Icon
        data-slot="spinner"
        role="status"
        aria-label="Loading"
        className={cn("size-8 animate-spin mt-5", className)}
        {...props}
      />
    </div>
  );
};
