enum Ascension {
  COMMON,
  RARE,
  RARE_PLUS,
  ELITE,
  ELITE_PLUS,
  LEGENDARY,
  LEGENDARY_PLUS,
  MYTHIC,
  MYTHIC_PLUS,
  ASCENDED,
  ASCENDED_ONE_STAR,
  ASCENDED_TWO_STAR,
  ASCENDED_THREE_STAR,
  ASCENDED_FOUR_STAR,
  ASCENDED_FIVE_STAR,
}

const ascensionToShortName = {
  [Ascension.COMMON]: 'c',
  [Ascension.RARE]: 'r',
  [Ascension.RARE_PLUS]: 'rp',
  [Ascension.ELITE]: 'e',
  [Ascension.ELITE_PLUS]: 'ep',
  [Ascension.LEGENDARY]: 'l',
  [Ascension.LEGENDARY_PLUS]: 'lp',
  [Ascension.MYTHIC]: 'm',
  [Ascension.MYTHIC_PLUS]: 'mp',
  [Ascension.ASCENDED]: 'a',
  [Ascension.ASCENDED_ONE_STAR]: 'a1',
  [Ascension.ASCENDED_TWO_STAR]: 'a2',
  [Ascension.ASCENDED_THREE_STAR]: 'a3',
  [Ascension.ASCENDED_FOUR_STAR]: 'a4',
  [Ascension.ASCENDED_FIVE_STAR]: 'a5',
};

const getNormalizedSiLevel = (siLevel: number): number => {
  if (siLevel >= 50) {
    return 50;
  } else if (siLevel >= 40) {
    return 40;
  } else if (siLevel >= 30) {
    return 30;
  } else if (siLevel >= 20) {
    return 20;
  } else if (siLevel >= 10) {
    return 10;
  }
  return 0;
}

const getNormalizedFurnitureLevel = (furnitureLevel: number): number => {
  if (furnitureLevel >= 36) {
    return 36;
  } else if (furnitureLevel >= 9) {
    return 9;
  }

  return 3;
}

const getNormalizedEngravingLevel = (engravingLevel: number): number => {
  if (engravingLevel >= 80) {
    return 80;
  } else if (engravingLevel >= 60) {
    return 60;
  }

  return 30;
}

export const generateHeroIconFileName = (
  heroId: number,
  ascendLevel: Ascension,
  siLevel?: number,
  furnitureLevel?: number,
  engravingLevel?: number,
): string => {
  let fileName = `${heroId}_${ascensionToShortName[ascendLevel]}`;

  if (ascendLevel >= Ascension.MYTHIC && typeof siLevel !== 'undefined') {
    fileName = `${fileName}_si${getNormalizedSiLevel(siLevel)}`;
  }

  if (ascendLevel >= Ascension.ASCENDED && typeof furnitureLevel !== 'undefined' && furnitureLevel >= 3) {
    fileName = `${fileName}_f${getNormalizedFurnitureLevel(furnitureLevel)}`;
  }

  if (ascendLevel >= Ascension.ASCENDED_ONE_STAR && typeof engravingLevel !== 'undefined' && engravingLevel >= 30) {
    fileName = `${fileName}_e${getNormalizedEngravingLevel(engravingLevel)}`;
  }

  return fileName;
};
