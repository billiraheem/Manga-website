export interface Manga {
    id: number
    title: string
    image: string
    rating?: number
    description?: string
    genre?: string[]
  }
  
  const mangaList: Manga[] = [
    {
      id: 1,
      title: 'One Piece',
      image: 'https://comicvine.gamespot.com/a/uploads/scale_medium/11136/111369808/6786544-one%20piece%201.jpg',
      rating: 5.0,
      description: "Gol D. Roger, a man referred to as the King of the Pirates, is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the King of the Pirates is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new King of the Pirates. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas.",
      genre: ["Adventure, Action, Fantasy"]
    },
    
    {
      id: 2, 
      title: 'Gintama',
      image: 'https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7022689-77.jpg',
      rating: 5.0,
      description: "Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan's surrender to powerful aliens known as the 'Amanto,' those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. Enter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. Assisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people's heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.",
      genre: ["Comedy, Action, Sci-fi"]
    },
  
    {
      id: 3, 
      title: 'Vagabound',
      image: 'https://images.meesho.com/images/products/420703631/jgvct_512.webp',
      rating: 5.0,
      description: "In 16th-century Japan, Shinmen Takezou is a wild, rough young man in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive. After the two are separated, Shinmen returns home on a self-appointed mission to notify the Hon'iden family of Matahachi's survival. He instead finds himself a wanted criminal, framed for his friend's supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the 'devil child,' secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto. Vagabond is the fictitious retelling of the life of one of Japan's most renowned swordsmen, the 'Sword Saint' Musashi Miyamoto—his rise from a swordsman with no desire other than to become 'Invincible Under the Heavens' to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself.",
      genre: ["Adventure, Action, Historical"]
    },
  
    {
      id: 4,
      title: 'Kingdom',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0375f8q9qCfX4_pYxJMfv3nSnSTIT_zyERz-ALH1awN8I7SkkA3KFzR6NnYKMWe-Euxo&usqp=CAU',
      rating: 4.5,
      description: "During the Warring States period in China, Xin and Piao are two brother-like youngsters who dream of becoming Great Generals, despite their low status as orphaned slaves. One day, they encounter a man of nobility, who gives Piao an opportunity to undertake an important duty within the state of Qin's royal palace. Parting ways, Xin and Piao promise each other to one day become the greatest generals in the world. However, after a fierce coup d'état occurs in the palace, Xin meets with a dying Piao, whose last words spur him into action and lead him to encounter the young and soon-to-be king of Qin, Zheng Ying. Although initially on bad terms, Xin and Zheng become comrades and start on a path filled with trials and bloodshed. Zheng's objective is to bring all the warring states under Qin, and Xin seeks to climb to the very top of the army ranks. Against a backdrop of constant tactical battle between states and great political unrest, both outside and within the palace, the two endeavor towards their monumental ambitions that will change history forever.",
      genre: ["Action, Historical"]
    },
  
    {
      id: 5,
      title: 'Sakamoto Days',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH26lSC12_j2M772RBghwX8tO_eJx5olDfa6S3HmMroO2vD7gfEyiNQKScl9D2MIpZasM&usqp=CAU',
      rating: 4.0,
      description: "Tarou Sakamoto was considered the greatest hitman of all time. Feared by many, he stood at the top of the underground world until he met and fell in love with a woman. As a result, Sakamoto abandoned his life of crime and now works as a convenience store clerk. Leaving his shady past behind proves more difficult than Sakamoto initially imagined. Many of his former rivals and partners do not believe that he has truly left the business and show up in hopes of taking him out. Barred from killing, Sakamoto must find creative ways to subdue his enemies and prevent them from bringing harm to his family, his store, and the small town he resides in.",
      genre: ["Action, Comedy"]
    },
  
    {
      id: 6,
      title: 'Boruto',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekQmG18H_zLM4zzuMqEhXsGXCaogkxO1eFg&s',
      rating: 2.0,
      description: "Boruto Uzumaki faces a world completely unlike that of his father, finding unique trouble in the distance between the two. Contending with a society that heaps an unbearable load of pressure on his shoulders over his status as the Hokage's son, Boruto carves his own path through the world, fighting to make a name for himself as evil forces threaten to shatter the peace his father helped create.",
      genre: ["Adventure, Action, Fantasy"]
    },

    {
      id: 7,
      title: 'Chainsaw Man',
      image: 'https://cdn.myanimelist.net/images/manga/3/216464.jpg',
      rating: 4.2,
      description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams.",
      genre: ["Action, Gore, Urban Fantasy"]
    },

    {
      id: 8,
      title: 'Raise wa tanin ga Ii',
      image: "https://cdn.myanimelist.net/images/manga/2/203176.jpg",
      rating: 3.5,
      description: "Yoshino Somei would have been a normal high school student if not for the fact that she is the granddaughter of the leader of the Osaka-based Somei Group, the Kansai region's largest yakuza organization. One day, Yoshino hurries home after hearing news about the unification of Kansai and Kanto's biggest syndicates, the Somei and the Miyama groups. This, according to the article, will result in the marriage of the leaders' grandchildren—one of whom is Yoshino herself! Despite her best efforts to annul the arrangement, Yoshino must go to Tokyo to visit her fiancé, Kirishima Miyama, who is unexpectedly nice and charming. During their first meeting, Yoshino is swept up in various events and becomes unable to refuse moving to Tokyo, which is why, half a year later, she now lives with the Miyama group. At school, she soon realizes that Kirishima is very popular, so her relationship with him garners the hate of his fangirls and subsequently results in bullying. To make matters worse, Kirishima could not be further away from her prince charming since he, after all, was born to be a yakuza member. Raise wa Tanin ga Ii follows Yoshino and her new life in Tokyo which is filled with nothing but troubles connected to the underworld. However, though she wishes to be as far from it as possible, this is not Yoshino's first time dealing with the world of the yakuza.",
      genre: ["Romance"]
    },

    {
      id: 9,
      title: 'Jujustu Kaisen',
      image: 'https://cdn.myanimelist.net/images/manga/3/210341.jpg',
      rating: 4.5,
      description: "Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as Curses terrorize humanity from the shadows, and powerful humans known as Jujutsu sorcerers use mystical arts to exterminate them. When high school student Yuuji Itadori finds a dried-up finger of the legendary Curse Sukuna Ryoumen, he suddenly finds himself joining this bloody conflict. Attacked by a Curse attracted to the finger's power, Yuuji makes a reckless decision to protect himself, gaining the power to combat Curses in the process but also unwittingly unleashing the malicious Sukuna into the world once more. Though Yuuji can control and confine Sukuna to his own body, the Jujutsu world classifies Yuuji as a dangerous, high-level Curse who must be exterminated. Detained and sentenced to death, Yuuji meets Satoru Gojou—a teacher at Jujutsu High School—who explains that despite his imminent execution, there is an alternative for him. Being a rare vessel to Sukuna, if Yuuji were to die, then Sukuna would perish too. Therefore, if Yuuji were to consume the many other remnants of Sukuna, then Yuuji's subsequent execution would truly eradicate the malicious demon. Taking up this chance to make the world safer and live his life for a little longer, Yuuji enrolls in Tokyo Prefectural Jujutsu High School, jumping headfirst into a harsh and unforgiving battlefield.",
      genre: ["Action, Supernatural"]
    },

    {
      id: 10,
      title: 'Haikyuu',
      image: 'https://cdn.myanimelist.net/images/manga/2/258225.jpg',
      rating: 4.9,
      description: "Ever since having witnessed the 'Little Giant' and his astonishing skills on the volleyball court, Shouyou Hinata has been bewitched by the dynamic nature of the sport. Even though his attempt to make his debut as a volleyball regular during a middle school tournament went up in flames, he longs to prove that his less-than-impressive height ceases to be a hindrance in the face of his sheer will and perseverance. When Hinata enrolls in Karasuno High School, the Little Giant's alma mater, he believes that he is one step closer to his goal of becoming a professional volleyball player. Although the school only retains a shadow of its former glory, Hinata's conviction isn't shaken until he learns that Tobio Kageyama—the prodigy who humiliated Hinata's middle school volleyball team in a crushing defeat—is now his teammate. To fulfill his desire of leaving a mark on the realm of volleyball—so often regarded as the domain of the tall and the strong—Hinata must smooth out his differences with Kageyama. Only when Hinata learns what it takes to be a part of a team will he be able to join the race to the top in earnest.",
      genre: ["Sports"]
    },

    {
      id: 11,
      title: 'Kurusiya no Hitorigoto',
      image: 'https://cdn.myanimelist.net/images/manga/2/176943.jpg',
      rating: 5.0,
      description: "Maomao, an apothecary's daughter, has been plucked from her peaceful life and sold to the lowest echelons of the imperial court. Now merely a maid, Maomao settles into her new mundane life and hides her extensive knowledge of medicine in order to avoid any unwanted attention. Not long after Maomao's arrival, the emperor's infant children inexplicably begin to experience grave symptoms—almost as if a curse has been cast. The curious Maomao easily solves the mystery and, to remain out of the limelight, attempts to leave an anonymous tip. Unfortunately, the dashing and perceptive eunuch Jinshi sees through it and manages to single her out. In recognition of her talent, Maomao is promoted to lady-in-waiting for the emperor's favorite concubine, Gyokuyou. As Maomao continues to remedy the numerous ailments afflicting the imperial court, her pharmaceutical expertise quickly proves indispensable.",
      genre: ["Drama, Mystery"]
    },

    {
      id: 12,
      title: 'Samurai Champloo',
      image: 'https://cdn.myanimelist.net/images/manga/3/56743.jpg',
      rating: 5.0,
      description: "Mugen is a rough-around-the-edges mercenary with a killer technique and nothing left to lose. Jin is a disciplined samurai who's as deadly as he is reserved. Fuu is a young waitress with a good heart and a resourcefulness that emerges when you least expect it. These three unlikely companions are about to begin a journey that will change all of their lives. It's a dangerous quest for a mysterious samurai that will see our squabbling group of heroes get into and out of trouble more times than they can count (which admittedly, isn't very high). From the cynical gentility of the nobles to the backstabbing of the Japanese underworld, Mugen, Jin and Fuu will face threats from without and within as they hurl insults and throwing stars alike. Ancient Japan is about to get a lethal dose of street justice—Champloo style. And it will never be the same.",
      genre: ["Action, Adventure, Comedy"]
    }
  
  ]

export type { Manga as Mangatype}
export default mangaList;