import LinkColor from './text/LinkColor';

export default function MenuItem({ url, icon, text }) {
  return (
    <LinkColor className="group flex flex-row justify-end" to={url}>
      <span className="align-middle text-text-yellow opacity-0 transition-all delay-200 duration-[400ms] translate-x-[50px] group-hover:opacity-100 group-hover:translate-x-[-10px]">
        {text}
      </span>
      {icon}
    </LinkColor>
  );
}
