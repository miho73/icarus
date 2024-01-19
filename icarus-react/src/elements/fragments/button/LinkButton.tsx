import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type LinkButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

function LinkButton(props: LinkButtonProps) {
  return (
    <button className={'text-blue-300 hover:underline'} onClick={props.onClick}>{props.children}</button>
  )
}

export default LinkButton;
