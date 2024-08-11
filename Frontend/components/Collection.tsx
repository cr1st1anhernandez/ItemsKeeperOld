import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/react';

interface Collection {
  name: string;
  description: string;
  category: string;
  items: number;
  imageUrl: string;
}

export const Collection = ({ name, description, category, items, imageUrl }: Collection) => {
  return (
    <Card
      className="flex w-full max-w-[20rem] transform flex-col items-start justify-start p-4 text-left transition hover:scale-105"
      isPressable
      onPress={() => console.log('item pressed')}
    >
      <CardHeader className="flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-bold uppercase text-orange-400">{category}</p>
          <small className="text-md opacity-70">{items} Tracks</small>
        </div>
      </CardHeader>
      <CardBody className="w-full overflow-visible">
        <Image
          alt="Card background"
          className="h-[12rem] w-[20rem] rounded-xl object-cover"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="flex flex-col items-start justify-start gap-2 text-left">
        <h4 className="text-3xl font-bold">{name}</h4>
        <p className="text-sm font-semibold uppercase opacity-70">{description}</p>
      </CardFooter>
    </Card>
  );
};
