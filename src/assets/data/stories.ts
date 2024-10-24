interface story {
  acts: Array<string>
  chapter: string
  imgSource: string
  name: string
  wiki: string
}

export const stories: Array<story> = [
  {
    name: 'Mole in the Hole',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Mole_in_the_Hole',
    acts: ['Mole in the Hole (I)', 'Mole in the Hole (II)', 'Mole in the Hole (III)'],
    imgSource: 'src/assets/img/covers/Chapter_Soldier_11_1_Tape_Cover_Front.webp'
  },
  {
    name: 'Cat and Mouse Game',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Cat_and_Mouse_Game',
    acts: ['Cat and Mouse Game (I)', 'Cat and Mouse Game (II)', 'Cat and Mouse Game (III)'],
    imgSource: 'src/assets/img/covers/Chapter_Nekomiya_Mana_1_Tape_Cover_Front.webp'
  },
  {
    name: 'The Iron Witch',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Iron_Witch',
    acts: ['The Iron Witch (I)', 'The Iron Witch (II)', 'The Iron Witch (III)'],
    imgSource: 'src/assets/img/covers/Chapter_Grace_Howard_1_Tape_Cover_Front.webp'
  },
  {
    name: 'Schoolyard Powerhouse',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Schoolyard_Powerhouse',
    acts: [
      'Schoolyard Powerhouse (I)',
      'Schoolyard Powerhouse (II)',
      'Schoolyard Powerhouse (III)'
    ],
    imgSource: 'src/assets/img/covers/Chapter_Koleda_Belobog_1_Tape_Cover_Front.webp'
  },
  {
    name: 'And the True Heroes Are Always Behind the Scenes',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/And_the_True_Heroes_Are_Always_Behind_the_Scenes',
    acts: [
      'And the True Heroes Are Always Behind the Scenes (I)',
      'And the True Heroes Are Always Behind the Scenes (II)',
      'And the True Heroes Are Always Behind the Scenes (III)'
    ],
    imgSource: 'src/assets/img/covers/Chapter_Von_Lycaon_1_Tape_Cover_Front.webp'
  },
  {
    name: 'Until Your Memory Fades',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Until_Your_Memory_Fades',
    acts: [
      'Until Your Memory Fades (I)',
      'Until Your Memory Fades (II)',
      'Until Your Memory Fades (III)'
    ],
    imgSource: 'src/assets/img/covers/Chapter_Alexandrina_Sebastiane_1_Tape_Cover_Front.webp'
  },
  {
    name: 'The Case of a Missing Bangboo',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Case_of_a_Missing_Bangboo',
    acts: [
      'The Case of a Missing Bangboo (I)',
      'The Case of a Missing Bangboo (II)',
      'The Case of a Missing Bangboo (III)'
    ],
    imgSource: 'src/assets/img/covers/Chapter_Qingyi_1_Tape_Cover_Front.webp'
  },
  {
    name: 'A Stroke of Luck',
    chapter: 'Agent Story',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/A_Stroke_of_Luck',
    acts: ['A Stroke of Luck (I)', 'A Stroke of Luck (II)', 'A Stroke of Luck (III)'],
    imgSource: 'src/assets/img/covers/Chapter_Burnice_White_1_Tape_Cover_Front.webp'
  }
]

export const specials = [
  {
    name: 'Undercover R&B',
    chapter: 'Special Episode',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Undercover_R%26B',
    acts: [
      'Poised to Act',
      'Inevitable Unexpected Variable',
      'Flawless Disguise',
      'Justice Crosses Paths',
      'Beliefs Come to Light'
    ],
    imgSource: 'src/assets/img/covers/Chapter_Jane_Doe_1_Tape_Cover_Front.webp'
  }
]

export default [...stories, ...specials]
