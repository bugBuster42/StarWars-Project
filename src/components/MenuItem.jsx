import LinkColor from './text/LinkColor';

export default function MenuItem({ url, icon, text }) {
  return (
    <LinkColor className="group flex flex-row justify-end " to={url}>
      <span className="align-middle opacity-0 group-hover:opacity-100 text-[#FFC500] duration-[400ms] delay-200 transition-all translate-x-[50px] group-hover:translate-x-[-10px]">
        {text}
      </span>
      {icon}
    </LinkColor>
  );
}
