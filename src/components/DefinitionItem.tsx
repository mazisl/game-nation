import { ReactNode } from "react";

interface DefItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: DefItemProps) => {
  return (
    <div className="my-5">
      <dt className="text-lg text-gray-500 font-semibold">{term}</dt>
      <dd>
        {children}
      </dd>
    </div>
  )
}

export default DefinitionItem