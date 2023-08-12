// HeaderItem.js
import Image from "next/image";

const HeaderItem = ({ item }) => {
  return (
    <p className={item.className}>
      {item.label}
      {item.icon && (
        <Image
          src={item.icon}
          alt={item.iconAlt}
          width={item.iconWidth}
          height={item.iconHeight}
          priority
        />
      )}
    </p>
  );
};

export  { HeaderItem };
