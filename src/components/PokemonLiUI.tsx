import { Box, Flex } from "../../styled-system/jsx";
import { Text } from "../../styled-system/jsx/text";
import Link from "next/link";
import { Pokemon } from "@/utils/interface";
import Image from "next/image";

export const PokemonListItemUI = ({ pokemon }: { pokemon?: Pokemon }) => {
  const content = (
    <Flex
      flexDirection="column"
      gap="lg"
      bg="surface.s1"
      borderRadius="lg"
      alignItems="center"
      p="lg"
    >
      {pokemon ? (
        <>
          <Image
            src={pokemon?.sprites.front_default || "/logo.png"}
            alt={pokemon?.name || "loader"}
            width={100}
            height={100}
          />
        </>
      ) : (
        <Box p="lg">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 910.13 908.95"
            width="68"
            height="68"
          >
            <defs>
              <style>{`.cls-1{fill:#010101;}.cls-2{fill:#fff;}.cls-3{fill:#eb2127;}`}</style>
            </defs>
            <title>5</title>
            <path
              className="cls-1"
              d="M337,730c.61-252,204.75-455.12,456.36-454.09,251.82,1,454.28,204.19,453.77,455.38s-204.7,454.42-455.63,453.56C539.59,1184,336.4,980.67,337,730Z"
              transform="translate(-337 -275.94)"
            />
            <path
              className="cls-2"
              d="M510,764.63c35.7,0,71.41.21,107.11-.17,7.31-.08,10.2,2,12,9.28,18.82,73.7,86,125.21,163,125.39A168.44,168.44,0,0,0,955.42,773.8c2-7.44,4.77-9.34,12-9.31q107.67.35,215.35,0c8,0,9.52,1.5,8.64,9.91-17.11,163.09-136.13,305.55-302.49,345.19-136.23,32.45-259,1.84-364.57-90.72-72-63.09-113.69-143.59-129.42-237.73-4.43-26.52-4.49-26.5,22.66-26.5Z"
              transform="translate(-337 -275.94)"
            />
            <path
              className="cls-3"
              d="M1073.7,695.83c-34.94,0-69.89-.26-104.82.19-8.34.11-11.65-2.73-13.91-10.64C935.18,616,874.39,565.77,806.24,562c-76.78-4.26-141.58,35.28-170.68,104.14-.87,2.07-1.66,4.19-2.38,6.31-8,23.38-8,23.38-33.4,23.38-64.63,0-129.25-.15-193.88.15-9.61,0-13.84-.92-12.11-12.72,22.8-155.69,106.22-266.09,251.65-325,156.73-63.54,330.1-21.39,443.93,103.13,57.07,62.43,90.45,136.3,101,220.32,1.76,14.11,1.64,14.15-12.93,14.16Q1125.56,695.84,1073.7,695.83Z"
              transform="translate(-337 -275.94)"
            />
            <path
              className="cls-2"
              d="M793.12,848.53c-64.13.57-118.48-51.88-119-114.84-.55-67.27,51.26-121,117.05-121.43,64.85-.41,118.47,52.27,119.29,117.21C911.3,794,858.11,848,793.12,848.53Z"
              transform="translate(-337 -275.94)"
            />
            <path
              className="cls-1"
              d="M793.1,672.52c32.69.37,57.55,26.21,57.15,59.39-.39,31.86-26.4,56.79-59,56.55a57.74,57.74,0,0,1-57.36-58.33C734.31,697.35,760.2,672.15,793.1,672.52Z"
              transform="translate(-337 -275.94)"
            />
          </svg>
        </Box>
      )}
      <Text textAlign="center" textTransform="uppercase">
        {pokemon?.name || "Loading..."}
      </Text>
    </Flex>
  );

  if (pokemon) {
    return <Link href={`/pokemons/${pokemon.name}`}>{content}</Link>;
  }

  return content;
};
