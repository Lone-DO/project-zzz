import type { IMovie } from '../common/interfaces'

const data: Array<IMovie> = [
  {
    name: 'Starlight Knight',
    genre: 'Action',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Starlight_Knight',
    imgSource: '/img/covers/Videotape_Starlight_Knight.webp',
    description: `After the meteor shower, it was no longer the peaceful city it once was. The appearance of evil monsters with unknown purposes plunged humanity into a great crisis. At this same time, the sworn enemy of the monsters, the Starlight Knights appeared!
      This popular special effects show reached an 11.8% rating for its finale. Its initial target audience group was children, but the excellent monster designs and cool lines led to a large number of young fans.`,
    level: 1
  },
  {
    name: "Don't Touch",
    genre: 'Fantasy',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Don%27t_Touch',
    imgSource: "/src/assets/img/covers/Videotape_Don't_Touch.webp",
    description: `The sudden visit of beings from off-planet does not bring the conflict that was expected: these alien beings are slow to act and intellectually inferior. Dr. Samier, who is in charge of the investigation, discovers that they have a very special ability — touch. After touching anything, they are able to imitate and change into it. The investigation team led by Dr. Samier begins a new research program to try to transform the aliens into human controllable "tools" and even "resources." What the team doesn't know is that the first target the aliens came into contact with on Earth was Dr. Samier himself.
Although not branded as a suspense film, it has been called a fantasy film that few people can understand in one go. When the identity of the Doctor is revealed, the audience's fear of the extraterrestrials gradually changes to confusion— "There were no humans from the beginning?"`,
    level: 1
  },
  {
    name: 'Coffee Mate',
    genre: 'Comedy',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Coffee_Mate',
    imgSource: '/src/assets/img/covers/Videotape_Coffee_Mate.webp',
    description: `In the time it takes to enjoy just one cup of coffee, beautiful customer Angelina and a coffee machine named Mr. Rob fall in love. This is ...no more than an ordinary love story.
A very successful small-budget film. All the scenes that appear in the film happen right in the coffee shop. Excellent camera work and a variety of clever situations that take place in the store make for an interesting viewing experience that's not at all fatiguing for the audience.`,
    level: 1
  },
  {
    name: 'Enter the Ether',
    genre: 'Suspense',
    level: 1,
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Enter_the_Ether',
    imgSource: '/src/assets/img/covers/Videotape_Enter_the_Ether.webp',
    description: `A Proxy infected with an unknown electronic virus becomes gradually unable to distinguish the real world from the virtual, and finally falls into a deep "sleep." In her sleep, she keeps searching for the truth of the virus in the bizarre electronic world of Ether.
A rare film with a Proxy as the main character. The dream scenes deliberately use an old cartoony style, on the one hand, to facilitate the audience to distinguish between dreams and reality, and on the other hand, to also add a distant and unique fantasy atmosphere to the film.`
  },
  {
    name: 'Nihility',
    genre: 'Action',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Nihility',
    imgSource: '/src/assets/img/covers/Videotape_Nihility.webp',
    description:
      'A fictional work based on images from the old civilization period. A scientist uncovers the possibility of a coming Hollow disaster and attempts to avert the disaster on his own after his warnings fall on deaf ears. He ultimately proves too weak to stop the disaster...',
    level: 1
  },
  {
    name: 'The Big Hollow',
    genre: 'Thriller',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Big_Hollow',
    imgSource: '/src/assets/img/covers/Videotape_The_Big_Hollow.webp',
    description:
      'An intern Hollow Investigator from one of the survivor cities encounters a massive crisis on the very first day at work. An enormous Hollow suddenly expands and is predicted to engulf the entire city.',
    level: 1
  },
  {
    name: 'The Ridu Tour',
    genre: 'Urban',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Ridu_Tour',
    imgSource: '/src/assets/img/covers/Videotape_The_Ridu_Tour.webp',
    description: `A video series for city residents or wanderers and other survivors who have recently entered the city. It introduces the different districts of New Eridu as well as how to live in the city.
It has the feel of a public service announcement. The host changes every episode for some reason.`,
    level: 1
  },
  {
    name: 'Invasion: Next Gen',
    genre: 'Action',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Invasion:_Next_Gen',
    imgSource: '/src/assets/img/covers/Videotape_Invasion_Next_Gen.webp',
    description: `An unusual Hollow appears in a city that contains Ethereals that can exist in environments outside of the Hollows. These frightening creatures leave their nest in the Hollow, and enter the city...`,
    level: 1
  },
  {
    name: 'First Piece of Soil',
    genre: 'Documentary',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/First_Piece_of_Soil',
    imgSource: '/src/assets/img/covers/Videotape_First_Piece_of_Soil.webp',
    description:
      'A documentary telling the story of the family that built Eridu — the Mayflowers, who overcame dire odds to ultimately establish the city. On the eve of its release, the producer edited one of the title words to "Cup" for some unknown reason. Rumor has it that the Mayflowers themselves made the request.',
    level: 1
  },
  {
    name: 'The Heartbeat',
    genre: 'Family',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Heartbeat',
    imgSource: '/src/assets/img/covers/Videotape_The_Heartbeat.webp',
    description: `A child with congenital heart disease falls into a Hollow. His mother disregards the advice of a Hollow Investigator and forces her way into the Hollow to save her child. Her only lead on her son's location is an app on her phone that monitors his heart. She follows every simulated heartbeat as she tracks him down...`,
    level: 1
  },
  {
    name: 'Oh~ Sweetie',
    genre: 'Romantic',
    description:
      'Tells the tale of a beautiful lady: Monica, who has lost her memory, and the various stories that unfold in a strange city. Bold performances and scenes made it quite popular.',
    imgSource: '/src/assets/img/covers/Videotape_Oh_Sweetie.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Oh~_Sweetie',
    level: 2
  },
  {
    name: 'Glorious Guardians',
    genre: 'Interview',
    description: `An interview show that talks to members of Hollow Investigation Squads in various professional capacities, and listens to them tell interesting stories about their work.

The station received complaints from some parents for glorifying the heroic deeds of Investigators, which instilled the idea of entering Hollows into children far too early. But in the end, it was not resolved.`,
    imgSource: '/src/assets/img/covers/Videotape_Glorious_Guardians.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Glorious_Guardians',
    level: 2
  },
  {
    name: 'Beheboth',
    genre: 'Disaster',
    description: `New Eridu in 100 years. Mankind has mastered the technical capability to completely control the Ethereal. The Hollows are no longer a disaster, but a place of constant resources and fighting power. Various forces develop and grow within, capturing and using the powerful Ethereals to fight for control of the city.

Well received by a wide audience (except for with the HIA), this blockbuster features high-quality special effects and storytelling. The biggest highlight of the film is the alliances, strategies and rivalries between the various factions in the film, which makes it stand out from most films of its genre that have a monotonous story.`,
    imgSource: '/src/assets/img/covers/Videotape_Beheboth.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Beheboth',
    level: 2
  },
  {
    name: 'Bangboo knows!',
    genre: 'Documentary',
    description:
      'Using the beloved image of Bangboo, the TV program teaches children about avoiding the Hollow in an entertaining way. Any number of "accidents" can happen during a live show, but the host always uses some wonderful reasoning to turn things around. Many people believe these "accidents" are scripted parts of the show.',
    imgSource: '/src/assets/img/covers/Videotape_Bangboo_knows.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Bangboo_knows!',
    level: 2
  },
  {
    name: 'Small Body Big Crisis',
    genre: 'Comedy',
    description:
      'One day, Bob woke up as an old Bangboo in a scrapyard. In order to return to his own body, he embarked upon a tumultuous journey.',
    imgSource: '/src/assets/img/covers/Videotape_Small_Body_Big_Crisis.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Small_Body_Big_Crisis',
    level: 2
  },
  {
    name: 'Final Punch',
    genre: 'Action',
    description: `An unfortunate couple is involved in a car accident, both becoming amputees. To encourage his girlfriend to come out of her depression, and cover their expensive medical bills, the man installs a pair of mechanical legs and signs himself up for an underground boxing tournament.

Violent collisions between fists and the mechanical take place, and intense competitions full of action-packed fight scenes make the crowd go wild. The film only spends a little bit of time on its portrayal of love. Still, when this iron man who reigns in the ring reveals a tenderness to only his love, this simple and short scene is a pearl in the movie.`,
    imgSource: '/src/assets/img/covers/Videotape_Final_Punch.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Final_Punch',
    level: 2
  },
  {
    name: 'Attack on Cyberz',
    genre: 'Thriller',
    description: `A mysterious, highly transmissible virus appears on the Internet. The first to be infected are the service robots in the city. As it spreads, every electronic device that can act on its own becomes infected. What's worse, the virus even spreads to Bangboo and Cyborgs. Those infected, known as Cyberz, are highly aggressive and out of control. To survive, people decide to escape from the city and resist the Cyberz...

One of the film's highlights is the minimal use of special effects. Instead, it chose to use a large number of precision-programmed machinery to coordinate the live-action performances and achieve a natural effect that shocks the audience. These incredibly realistic-looking rampaging machines, to a certain degree, have succeeded in evoking fear in the hearts of the audience.`,
    imgSource: '/src/assets/img/covers/Videotape_Attack_on_Cyberz.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Attack_on_Cyberz',
    level: 2
  },
  {
    name: 'Dimensional Musketeer',
    genre: 'Trendy',
    description: `No one knows his name. He's known as the Dimensional Musketeer. It's impossible to escape his bullets — because they are made of Ether.

An action film about a sniper who combines Ether technology and a sniper rifle to a ridiculous degree. In the final, jaw-dropping showdown, the cool male protagonist "goes for an impossible kill at 2,000 meters away as he targets the Ethereal King in the center of a Hollow." The clip was extremely popular online, so much so that the producer of the film made a statement clarifying it was just an exaggerated fictional plot and that viewers should not confuse it with the reality of Hollow Investigator work.`,
    imgSource: '/src/assets/img/covers/Videotape_Dimensional_Musketeer.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Dimensional_Musketeer',
    level: 2
  },
  {
    name: '7710 and Its Cat',
    genre: 'Adventure',
    description: `Based on a real story. Abandoned in a Hollow by an investigator, Bangboo IGC-7710 misunderstands its owner's order and identifies the stray cat they met as a rescue target. In the end, both Bangboo and cat safely escaped the Hollow and find the cat's owner.

7710 and the stray cat Katie have the perfect ending and live with their owner happily ever after. But the reality is not quite what it seems. The stray cat was adopted by a kind person, but 7710 was treated like a defective product: its records were erased, programming was simplified, and it was reassembled as an ordinary social service Bangboo.`,
    imgSource: '/src/assets/img/covers/Videotape_7710_and_Its_Cat.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/7710_and_Its_Cat',
    level: 2
  },
  {
    name: 'Encore',
    genre: 'Tragic',
    description: `Ariely lost her home at the age of seven when the orphanage was demolished. After 20 years of wandering, she is now the lead performer at a dance theater. She recalls the orphanage's past and reworks and reinterprets it from memory, trying to bring back her former playmates.

A warm and fun musical film. Ariely recalls memories through musical compositions. The music is subtly integrated into the plot without being obtrusive, piecing together the complete story and portraying the protagonist's childhood friends, exhibiting a high level of skill in music and storytelling.`,
    imgSource: '/src/assets/img/covers/Videotape_Encore.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Encore',
    level: 2
  },
  {
    name: 'Disappearing Elevator',
    genre: 'Suspense',
    description: `Visit the office building where clients' disappearing is not so unusual. A guard working overtime has also taken notice. This building has a strange elevator and fabricated security footage that all link back to someone pulling the strings and two shocking kidnapping cases.

The movie was almost entirely filmed in the office building, but with the shot angles, the elevator, and floors that don't exist, audiences won't get bored with the visuals.`,
    imgSource: '/src/assets/img/covers/Videotape_Disappearing_Elevator.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Disappearing_Elevator',
    level: 2
  },
  {
    name: 'Family',
    genre: 'Action',
    description: `A Hollow Investigator who's past his prime receives a message from the bank. The sender is his son. The only problem is that the army told him his son went missing in action years ago during an operation to suppress a Hollow. The old Hollow Investigator decides it's time to uncover the truth.`,
    imgSource: '/src/assets/img/covers/Videotape_Family.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Family',
    level: 2
  },
  {
    name: 'We Need You',
    genre: 'Advert',
    description:
      'A generic recruitment ad. A scheduled time slot for displaying recruitment ads. As long as the fees are paid, any company, organization, legal entity, or legitimate faction can publish recruitment ads to seek employees.',
    imgSource: '/src/assets/img/covers/Videotape_We_Need_You.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/We_Need_You',
    level: 2
  },
  {
    name: 'This Is How I Am',
    genre: 'Documentary',
    description: `This documentary brings together various kinds of audio-visual and textual information from the old civilization to show the world and human life during that period.

It was once banned by a company in New Eridu on the grounds it was "showing a beautiful illusion that does not exist and diminishes citizen's safety awareness." It was later reopened after a large number of fans protested.`,
    imgSource: '/src/assets/img/covers/Videotape_This_Is_How_I_Am.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/This_Is_How_I_Am',
    level: 3
  },
  {
    name: 'More Than One Truth',
    genre: 'Comedy',
    description: `A downtrodden detective sees the number of cases and success rate go up at the same time he adopts his friend's child. Every time he thinks he has determined the truth, he somehow loses consciousness. When he wakes up, the case has been solved, but the conclusion reached always seems quite different from what he had deduced...`,
    imgSource: '/src/assets/img/covers/Videotape_More_Than_One_Truth.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/More_Than_One_Truth',
    level: 3
  },
  {
    name: 'Return to Giallo City',
    genre: 'Retro',
    description: `A group of Hollow Raiders are commissioned to investigate a mysterious Hollow, unaware that it's a trap set by someone seeking vengeance. Within the fabricated Hollow, the Raiders attack both family and friends who, to them, look like Ethereals. This is how they will atone for their crimes.`,
    imgSource: '/src/assets/img/covers/Videotape_Return_to_Giallo_City.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Return_to_Giallo_City',
    level: 3
  },
  {
    name: 'TreCarls',
    genre: 'Family',
    description: `Portrays the life of the Carl family. Depicting the joys and sorrows of their life, from starting out in society to becoming a parent, from the birth of their child to that child entering school... Everything seems ordinary and trivial but also wholesome and touching... Oh, and there's Bangboo.

A unique sitcom featuring an all-Bangboo cast. The production team specially customized many Bangboo models of different sizes so that the Carl family look a little "older" each season. Its unique funny style has attracted a large audience, particularly with children.`,
    imgSource: '/src/assets/img/covers/Videotape_TreCarls.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/TreCarls',
    level: 3
  },
  {
    name: 'The Port Peak',
    genre: 'Thriller',
    description:
      'Based on a true story, a group of young people enters the forbidden Port Mountain. They are not alone. The robotic monster known as the "Lumberjack" lurks about the mountain.',
    imgSource: '/src/assets/img/covers/Videotape_The_Port_Peak.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/The_Port_Peak',
    level: 3
  },
  {
    name: 'Raiders of the Hollow',
    genre: 'Adventure',
    description: `A former top Hollow Investigator is down on his luck when he happens to get wrapped up in an adventure into a Hollow to recover a lost, mysterious treasure from the old civilization period.

The fourth installment has raving reviews and is now playing in theaters.`,
    imgSource: '/src/assets/img/covers/Videotape_Raiders_of_the_Hollow.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Raiders_of_the_Hollow',
    level: 3
  },
  {
    name: 'Last Flight',
    genre: 'Romantic',
    description: `A film inspired by images from the old civilization.

Joseph, a stunt pilot, decides to perform a highly risky stunt to prove his love to his fiancée, Irenda, but tragically loses his life in an accident. Discovering that her engagement ring allows her to return to the morning of the accident, Irenda attempts to go back in time to prevent the tragedy. Despite her efforts, an unseen force consistently leads Joseph to his death. To her horror, with every return to the past, the moment of Irenda's arrival is delayed by a fraction, diminishing her chances to change their fate.`,
    imgSource: '/src/assets/img/covers/Videotape_Last_Flight.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Last_Flight',
    level: 3
  },
  {
    name: 'Never Overtime',
    genre: 'Fantasy',
    description: `A nonsensical office worker finds himself employed at a cruel company known as Olympus. No matter what he does, he can never get off work on time. He decides it's time to fight back, and so together with the "TeamBuilding Goddess Athena," "Overtime Fitness Nut Ares," and "Holder of Overnight Meetings Hermes," this office worker plans on starting a war. Their ultimate goal? Get off work on time.`,
    imgSource: '/src/assets/img/covers/Videotape_Never_Overtime.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Never_Overtime',
    level: 3
  },
  {
    name: 'Sunset Plaza',
    genre: 'Urban',
    description: `This talk show features popular actors, special workers, scholars, entrepreneurs, and ordinary citizens talking and expressing their views on recent events in New Eridu.

There's an 80% chance it will develop into a cursing match, and another 20% chance it will just break into an all-out fight.`,
    imgSource: '/src/assets/img/covers/Videotape_Sunset_Plaza.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Sunset_Plaza',
    level: 3
  },
  {
    name: 'Back 2 Life',
    genre: 'Interview',
    description: `This program usually invites famous Hollow Investigators and critics to discuss unusual events that occurred in the Hollows.

It doesn't matter how reliable what they are saying is. What matters is that the audience loves to listen to them.`,
    imgSource: '/src/assets/img/covers/Videotape_Back_2_Life.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Back_2_Life',
    level: 3
  },
  {
    name: 'Unlimited Players',
    genre: 'Suspense',
    description: `A group of gamers are invited to play a new VR game, only to discover that they are actually NPCs in the upper level of the game. When they try to fight back against the upper level, players there find out that they, too, are NPCs in an upper level of the game...

Unlike similar films, the storyline of "Unlimited Players" is not "the protagonist proves that he is not an NPC," instead being quite the opposite. There are various indications that confirm the protagonist is an NPC, and even the invitation to enter the game may be a pre-designed plot. As the truth of the upper game is unveiled layer by layer, the protagonist's situation at the bottom does not improve but becomes more dangerous. Pressure accumulates throughout the story right up to the last moment, as the truth is slowly revealed layer by layer, and when all the foreshadowing is revealed in one go, the audience can't help but feel exhilarated.`,
    imgSource: '/src/assets/img/covers/Videotape_Unlimited_Players.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Unlimited_Players',
    level: 3
  },
  {
    name: "Rookie's Guide to the Hollow",
    genre: 'Disaster',
    description:
      'A scientist from the old civilization is "transported" through time to the peak of the Hollow disaster period due to an accident that occurred during his research. Now, he is looking for a way to return to the past, while also trying to help people in this time period resist the Hollow.',
    imgSource: `/src/assets/img/covers/Videotape_Rookie's_Guide_to_the_Hollow.webp`,
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Rookie%27s_Guide_to_the_Hollow',
    level: 3
  },
  {
    name: 'Best Bid',
    genre: 'Trendy',
    description: `A TV shopping program selling everything imaginable — both useful and useless.

It's known for having the host (well, the assistant) demonstrate every item live.`,
    imgSource: '/src/assets/img/covers/Videotape_Best_Bid.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Best_Bid',
    level: 3
  },
  {
    name: 'Black LP Player',
    genre: 'Advert',
    description: `A station that automatically plays songs on rotation.

For an extra fee, you can even play the songs you like on demand.`,
    imgSource: '/src/assets/img/covers/Videotape_Black_LP_Player.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Black_LP_Player',
    level: 3
  },
  {
    name: 'Black Tales',
    genre: 'Tragic',
    description:
      'A stage play pulled together from several popular fairy tales, characterized by its dark atmosphere and plot development. One night, all of the adults suddenly disappear and the entire world turns into paper. A little girl Gwen embarks on an adventure to find out where all the adults have gone.',
    imgSource: '/src/assets/img/covers/Videotape_Black_Tales.webp',
    wiki: 'https://zenless-zone-zero.fandom.com/wiki/Black_Tales',
    level: 3
  }
]

export default data
