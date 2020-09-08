import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Box, PseudoBox, Flex, Image, Button } from '@chakra-ui/core';

// UI
import Card from 'ui/components/Card';

// Type
type EventCardProps = {
  title: string;
  body: string;
  image: string;
  buttonText: string;
  buttonEnabled: boolean;
  buttonLink: string;
  internalLink?: boolean;
};

const EventCard: FC<EventCardProps> = ({
  title,
  body,
  image,
  buttonText,
  buttonEnabled,
  buttonLink,
  internalLink = true,
}) => {
  const button = (
    <Button
      bg={'tertiaryColor'}
      color={'white'}
      fontFamily={'var(--alt-font)'}
      w={'100%'}
      isDisabled={!buttonEnabled}
    >
      {buttonText}
    </Button>
  );

  let link = <Link to={buttonLink}>{button}</Link>;
  if (!internalLink) {
    link = <a href={buttonLink}>{button}</a>;
  }

  return (
    <Card>
      <Flex
        maxWidth={['300px', '300px', '300px', '300px', '250px', '270px']}
        p={'10px 0'}
        h={'100%'}
        textAlign={'center'}
        justifyContent={'space-between'}
        flexDirection={'column'}
      >
        <Box>
          <Image src={image} rounded={'full'} size={'150px'} m={'20px auto'} />
          <PseudoBox
            as={'h5'}
            fontSize={'3xl'}
            fontFamily={'var(--alt-font)'}
            color={'primaryColor'}
          >
            {title}
          </PseudoBox>
          <Flex
            color={'font'}
            m={'20px 0'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Flex>
        </Box>
        <Box w={'100%'}>{link}</Box>
      </Flex>
    </Card>
  );
};

export default EventCard;
