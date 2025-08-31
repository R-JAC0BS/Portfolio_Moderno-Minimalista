import React from 'react';


interface ArticleCardInformation extends React.HTMLAttributes<HTMLElement> {
    icon  ?: React.ReactNode;
    placeHolder ?: string;
    rede : string;
    href : string;
}

const ArticleCard = ({rede, href ,icon,placeHolder, ...rest} : ArticleCardInformation) => {
  return (
     <article className="flex flex-col items-center  bg-white p-4 rounded-2xl  bg-amber-800 gap-2 shadow-md" {...rest}>
               {icon}
                <h4 className="font-bold">{rede}</h4>
                <h5 className="text-sm">{placeHolder}</h5>
                <a
                  href={href}
                  target="_blank"
                  className="text-xs"
                >
                  Entre em contato
                </a>
              </article>
  );
};

export default ArticleCard;