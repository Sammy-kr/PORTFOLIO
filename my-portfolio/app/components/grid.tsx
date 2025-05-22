import { gridItems } from "../data/index";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

interface GridItem {
  id: number;
  title: string;
  description: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

const Grid = () => {
  return (
    <section id="about" className="relative z-10">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item: GridItem, i: number) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;