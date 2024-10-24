interface story {
  acts: Array<string>
  chapter: string
  imgSource: string
  name: string
  wiki: string
}

const genres: Array<story> = [
  {
    name: 'Business x Strangeness x Justness',
    chapter: 'prologue',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Business_x_Strangeness_x_Justness',
    acts: [
      'A Surprise',
      'Hollow Survival Guide',
      'Mutated Corruption',
      'Proxy Business',
      'Emergency',
      'Hacking Attack',
      'Reconnected',
      '"Fairy"'
    ],
    imgSource: 'src/assets/img/covers/Chapter_0_Tape_Cover_Front.webp'
  },
  {
    name: "Cat's Lost & Found (A)",
    chapter: 'Chapter 1',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Cat%27s_Lost_%26_Found_(A)',
    acts: [
      'An Uninvited Guest',
      'Client with Two Tails',
      'Abandoned Rally Point',
      'Lost Item',
      'Explosive Last Train',
      'Doubts Arise'
    ],
    imgSource: 'src/assets/img/covers/Chapter_1A_Tape_Cover_Front'
  },
  {
    name: "Cat's Lost & Found (B)",
    chapter: 'Chapter 1',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Cat%27s_Lost_%26_Found_(B)',
    acts: [
      'Hidden Stories',
      'Step by Step',
      'Unexpected Captives',
      'Second Rescue',
      'Endlessness',
      "Vagrant's Final Resting Place"
    ],
    imgSource: 'src/assets/img/covers/Chapter_1B_Tape_Cover_Front.webp'
  },
  {
    name: "A Call From the Hollow's Heart (A)",
    chapter: 'Chapter 2',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/A_Call_From_the_Hollow%27s_Heart_(A)',
    acts: [
      'Assigned Commission',
      'Problem Child',
      'The Essence of Being a Bro',
      'The Only Embrace',
      "Savior's Mission",
      'That Name'
    ],
    imgSource: 'src/assets/img/covers/Chapter_2A_Tape_Cover_Front.webp'
  },
  {
    name: "A Call From the Hollow's Heart (B)",
    chapter: 'Chapter 2',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/A_Call_From_the_Hollow%27s_Heart_(B)',
    acts: ['Searching for the Prototype', 'Sisters', 'Steel Devourer', 'Call That Name'],
    imgSource: 'src/assets/img/covers/Chapter_2B_Tape_Cover_Front.webp'
  },
  {
    name: 'Mission Unthinkable (A)',
    chapter: 'Chapter 2 Interlude',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Mission_Unthinkable_(A)',
    acts: [
      'Crisis on the Street Corner',
      'Unexpected Reunion',
      'Unproductive Visit',
      'Sixth Street Theft Case',
      'Invisible Assistant'
    ],
    imgSource: 'src/assets/img/covers/Chapter_2IA_Tape_Cover_Front.webp'
  },
  {
    name: 'Mission Unthinkable (B)',
    chapter: 'Chapter 2 Interlude',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Mission_Unthinkable_(B)',
    acts: [
      'Emerging Crisis',
      'Emergency Operation',
      'Shared Beliefs',
      'Moment to Counterattack',
      "We'll Meet Again"
    ],
    imgSource: 'src/assets/img/covers/Chapter_2IB_Tape_Cover_Front.webp'
  },
  {
    name: 'The Midnight Pursuit (A)',
    chapter: 'Chapter 3',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Midnight_Pursuit_(A)',
    acts: [
      'A Mysterious Letter',
      'First Exploration of a Perilous Building',
      'Friends Old and New',
      'Ascending Dance',
      'Close, Yet Worlds Apart'
    ],
    imgSource: 'src/assets/img/covers/Chapter_3A_Tape_Cover_Front.webp'
  },
  {
    name: 'The Midnight Pursuit (B)',
    chapter: 'Chapter 3',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Midnight_Pursuit_(B)',
    acts: [
      'Power Restored',
      'An Uninvited Guest',
      'Darkest Hour',
      'Shocking Conspiracy',
      'Rescue Mission',
      'A Close Call',
      'Into the Darkness'
    ],
    imgSource: 'src/assets/img/covers/Chapter_3B_Tape_Cover_Front.webp'
  },
  {
    name: 'Tour de Inferno (A)',
    chapter: 'Chapter 4',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Tour_de_Inferno_(A)',
    acts: [
      'A Different Path',
      'Outer Ring Journey',
      'Beneath the Legend',
      'Data Collection',
      'Source Procurement',
      'Leak Scandal'
    ],
    imgSource: 'src/assets/img/covers/Chapter_4A_Tape_Cover_Front.webp'
  },
  {
    name: 'Tour de Inferno (B)',
    chapter: 'Chapter 4',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Tour_de_Inferno_(B)',
    acts: [
      'Tracking Operation',
      'Ridu Holidays',
      'Tour de Inferno',
      'The Hero Returns',
      'Gates of the Past'
    ],
    imgSource: 'src/assets/img/covers/Chapter_4B_Tape_Cover_Front.webp'
  },
  {
    name: 'The Zero Zone',
    chapter: 'Extra',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Zero_Zone',
    acts: ['Restricted Area Investigation', 'Mysterious Encounter', 'Frontline Pursuit'],
    imgSource: 'src/assets/img/covers/Chapter_The_Zero_Zone_Tape_Cover_Front.webp'
  },
  {
    name: 'Just Another Day at the Video Store',
    chapter: 'Extra',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Just_Another_Day_at_the_Video_Store',
    acts: ['Art Imitates Life'],
    imgSource:
      'src/assets/img/covers/Chapter_Just_Another_Day_at_the_Video_Store_Tape_Cover_Front.webp'
  }
]

export default genres
