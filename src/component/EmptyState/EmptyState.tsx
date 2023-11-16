import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button/Button";
import empty from "../../assets/img/404.png";
interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: {
    onClick: () => void;
    label: string;
  };
  showAction?: boolean;
  image?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  action,
  showAction,
  image = empty,
}) => {
  return (
    <div className="py-5  mt-8 h-[300px] flex flex-col items-center justify-center text-center">
      <img src={image} className="w-[250px]" />
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-100 pb-1">
          {title}
        </h2>
        <p className="text-sm text-gray-100">{description}</p>
      </div>
      {!!action && showAction && (
        <div className="mt-6 flex justify-center">
          <Button onClick={action.onClick}>
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};
