/*

   This document contains all the messages played by Dota Coach.

   Each message is described by one object with the following fields:
     - category (mandatory)     Category of the message, e.g. NeturalItem, DayTime, PowerRunes, BountyRunes, Outposts, EnemyHero [this field allows the app to turn on/off certain messages based on the user's preference]
     - audioFile (mandatory)    Folder and name of audio file (the app adds '.mp3' to the file name)
     - messageTime (optional)   Time when message is played in seconds (time is based on game time) ; -90 means that the message is played at hero selection
     - repeatTime (optional)    Time interval to repeat message (this fields can only be used in combination with 'messageTime')
     - messageTimes (optional)  Array of times when message is player
     - textMessage (mandatory)  Message spoken by narrator and displayed in the game
     - chatMessage (optional)   Optional parameter to specify chatMessages (used for the case the text message is too long). Max lenght is 109 characters.
     - audiance (mandatory)     Has two possible values: 'All' and 'Lane' (All: All players get the message; Lane: Players playing against hero in the lane get messages)

    [Idea for the future, but not yet implemented:
        Support: Only support players get the message
        Core: Only core player get the message]

  Questions and comments:
    // DayTime
    Is it worth adding it for 0min switch to daytime? -> Recent patch might make it worth it
    I displayed laning tips at -60, -50, -40, -30, 30.
    Tips that are revolving around hero's ulty are being displayed at 8*60.
    Past the laning stage tips at 10*60+10.
    Major item suggestion at 12*60. Usually heroes have the prefered item that they want to buy so this suggestion is effectively for their second major item.
    Checking if enemy heroes is doing Roshan at 15*60+10.
    Should I write heroes name before spells as newer players might not know which hero has that spell? It extends the message.-- Think about this one --


  Antisummons items: Crimson Guard, armor items.
  Antiillusion items: Battle Fury, Radiance, Maelstrom, Mjollnir, Gleipnir, Shiva's Guard.
  Antimagicdamage items: Cloak, Glimmer Cape, Hood of Defiance, Pipe of Insigh, Eternal Shroud, Mage Slayer, Black King Bar.
  Antitargetable spells: Linken's Sphere, Lotus Orb, status resistance items.
  Antihealing items: Spirit Vessel, Eye of Skadi, Shiva's Guard.
  Antievasion items: Javelin, Monkey King Bar, Bloodthorn, Maelstrom, Mjollnir, Witch Blade.
  Dispel items: Eul's Scepter of Divinity, Lotus Orb, Black King Bar, Satanic, Aeon Disk, Wind Waker.
  Gap closing items: Blink, Shadow Blade, Force Staff, blink upgrades.
  Armor reducing items: Blight Stone, Orb of Corrosion, Medallion of Courage, Solar Crest, Desolator, Assault Cuirass.

  ***CHANGED 7.30*** labels changed in 7.30

*/


/**
 * 
 * @param hero Hero name, e.g. "Anti-Mage"
 * @returns Array of message objects
 */
export function getOwnHeroMessages(hero): any[] {
  return dotaCoachMessages.filter(message => (message.hero==hero && message.category=='OwnHero'))
}

/**
 * 
 * @param hero Hero name, e.g. "Anti-Mage"
 * @returns Array of message objects
 */
export function getEnemyHeroMessages(hero): any[] {
  return dotaCoachMessages.filter(message => (message.hero==hero && message.category=='EnemyHero'))
}

export const ALL               = 'All'
export const IN_LANE           = 'InLane'
export const ROLE_CORE         = 'Core' // For mid, carry and offlane
export const ROLE_MID          = 'Mid'
export const ROLE_CARRY        = 'Carry'
export const ROLE_OFFLANE      = 'Offlane'
export const ROLE_SUPPORT      = 'Support' // For soft and hard support
export const ROLE_SUPPORT_SOFT = 'SoftSupport'
export const ROLE_SUPPORT_HARD = 'HardSupport'

export const dotaCoachMessages = [

    // BountyRunes
    {category: "BountyRunes", audioFile: "general/BountyRunes", messageTime: (3*60-30), repeatTime: (3*60), textMessage: "Bounty runes will appear soon", audience: [ALL]},

    // WaterRunes
    {category: "WaterRunes", audioFile: "general/WaterRunes", messageTimes: [2*60-15, 4*60-15], textMessage: "Water runes will appear soon", audience: [ALL]},

    // PowerRunes
    {category: "PowerRunes", audioFile: "general/PowerRune", messageTime: (6*60-15), repeatTime: (2*60), textMessage: "Power rune will appear soon", audience: [ALL]},

    // NeutralItems
    {category: "NeutralItems", audioFile: "general/NeutralItemsTier1", messageTime: (7*60-2), textMessage: "Neutral items tier 1 are available now", audience: [ALL]},
    {category: "NeutralItems", audioFile: "general/NeutralItemsTier2", messageTime: (17*60-2), textMessage: "Neutral items tier 2 are available now", audience: [ALL]},
    {category: "NeutralItems", audioFile: "general/NeutralItemsTier3", messageTime: (27*60-2), textMessage: "Neutral items tier 3 are available now", audience: [ALL]},
    {category: "NeutralItems", audioFile: "general/NeutralItemsTier4", messageTime: (37*60-2), textMessage: "Neutral items tier 4 are available now", audience: [ALL]},
    {category: "NeutralItems", audioFile: "general/NeutralItemsTier5", messageTime: (60*60-2), textMessage: "Neutral items tier 5 are available now", audience: [ALL]},

    // Smoke Of Deceit
    {category: "SmokeOfDeceit", audioFile: "general/SmokeOfDeceit1", messageTime: (5*60 + 30)-1, textMessage: "Smoke of deceit is available in the shop", audience: [ALL]},
    {category: "SmokeOfDeceit", audioFile: "general/SmokeOfDeceit2", messageTimes: [(15*60 + 10), (30*60 + 10), (45*60 + 10), (60*60 + 10)], textMessage: "Check if smoke of deceit is available in the shop", audience: [ALL]},

    // Tome of Knowledge 
    {category: "TomeOfKnowledge", audioFile: "general/TomeOfKnowledge", messageTime: (10*60)-2, repeatTime: (10*60), textMessage: "Tome of knowledge is available in the shop", audience: [ALL]},

    // Aghanim's Shard
    {category: "AghanimsShard", audioFile: "general/AghanimsShard", messageTime: 20*60-2, textMessage: "Aghanim's Shard is available in the shop", audience: [ALL]},

    // Siege Creeps
    {category: "SiegeCreeps", audioFile: "general/SiegeCreeps", messageTime: 5*60, repeatTime: 5*60, textMessage: "Siege creeps just spawned", audience: [ALL]},

    // DayTime
    {category: "DayTime", audioFile: "general/DayTime", messageTime: (10*60-10), repeatTime: (10*60), textMessage: "It will be day soon", audience: [ALL]},
    {category: "DayTime", audioFile: "general/NightTime", messageTime: (5*60-10), repeatTime: (10*60), textMessage: "It will be night soon", audience: [ALL]},

    // Outposts
    // {category: "Outposts", audioFile: "general/Outposts", messageTime: (20*60-45), repeatTime: (10*60), textMessage: "Outposts will grant experience soon, capture them if you have already taken down a tier 2 tower", audience: [ALL]}, |patch 7.29| MESSAGES REMOVED

    // 1. Abaddon | 28.02.2021
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_1_AphoticShield", messageTime: 10, textMessage: "Apply Aphotic Shield preemptively on yourself as you are coming to lane after rune fight. Apply another as the previous one explodes to inflict great AoE damage. Pull afterwards.", audience: [ROLE_SUPPORT]},
    // Alex: Not sure I understand this one. Maybe we can refurmulate
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_2_Support", messageTime: 30, textMessage: "Play ahead of the Core you are supporting to absorb attention.", audience: [ROLE_SUPPORT]},
    // ALex: What do you mean by 'absorb attention'?
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_9_Salve", messageTime: 45, textMessage: "Salve or clarity won't be canceled while you have Apothic Shield on.", audience: [ALL]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_3_BorrowedTime1", messageTime: 6*60, textMessage: "If someone applies a break effect on you, you will have to trigger Borrowed Time manually.", audience: [ALL]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_4_Disables", messageTime: 8*60, textMessage: "If you got disabled along with your teammate you can pop Borrowed Time to unstun yourself and then apply Aphotic Shield on a stunned ally to free him as well.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_5_BorrowedTime2", messageTime: 12*60, repeatTime: 20*60, textMessage: "You can position more aggressively than rest of your team, as opponents usually don't want to go on you due to Borrowed Time.", audience: [ALL]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_6_Dispel", messageTime: 20*60, repeatTime: 20*60, textMessage: "Constantly look at your teammates to heal or hard dispel them.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_7_Silences", messageTime: 16*60, textMessage: "Silences and heal reductions are a big problems for Abaddon. Avoid being hit by those or itemize against them.", audience: [ALL]},
    {category: "OwnHero", hero: "Abaddon", audioFile: "ownHero/Abaddon_8__Scepter", messageTime: 22*60, textMessage: "With Aghanim's Scepter, you will need to activate your Ultimate manually, while most of the damage is being inflicted on your teammates.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},

    {category: "EnemyHero", hero: "Abaddon", audioFile: "heroes/Abaddon_1_Aphotic shield dispel", messageTime: (-60), textMessage: "Abaddon's Aphothic Shield applies strong dispel. Use disabling and damage-over-time dispellable spells only after the shield was used.", chatMessage: "Aphothic Shield applies strong dispel. Use dispellable spells after the shield was used.", audience: [ALL], image: {type: "ability", name: "abaddon_aphotic_shield"}},
    {category: "EnemyHero", hero: "Abaddon", audioFile: "heroes/Abaddon_2_Curse of avernus", messageTime: (-50), textMessage: "It takes four attacks from Abaddon's Curse of Avernus to silence and slow you significantly.", audience: [ALL], image: {type: "ability", name: "abaddon_frostmourne"}},
    {category: "EnemyHero", hero: "Abaddon", audioFile: "heroes/Abaddon_3_Aphotic shield damage", messageTime: (-40), textMessage: "If you are in the fog, exploding Aphotic Shield won't damage you.", audience: [IN_LANE], image: {type: "ability", name: "abaddon_aphotic_shield"}},
    {category: "EnemyHero", hero: "Abaddon", audioFile: "heroes/Abaddon_4_Burrowed time", messageTime: (8*60), textMessage: "Abaddon's Ulti Burrowed Time applies strong dispel and heals Abaddon for all damage taken. Don't hit him.", audience: [ALL], image: {type: "ability", name: "abaddon_aphotic_shield"}},
    {category: "EnemyHero", hero: "Abaddon", audioFile: "heroes/Abaddon_5_Break", messageTime: (8*60+10), textMessage: "Break effects make Burrowed Time not start automatically. But Abaddon can still activate it manually.", audience: [ALL], image: {type: "item", name: "silver_edge"}},

    // 2. Alchemist | Earlier work
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_1_BountyRunes", messageTime: -30, textMessage: "Collecting Bounty Runes is very important for Alchemist. Let your team know when the bounty runes are about to spawn.", audience: [ALL]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_2_GreevilsGreed1", messageTime: 4*60, textMessage: "Understand when you are no longer able to lane and move to the jungle. Alchemist farms insanely fast and you don't want die and lose Greevil's Greed stacks.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_3_Stacks", messageTime: 5*60, textMessage: "Alchemist prefers to farm huge amounts of easy to kill creeps. Avoid farming Ancients until you can kill them reasonably fast. Ask your team to stack smaller camps.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_4_Dispel", messageTime: 6*60, textMessage: "Chemical Rage applies dispel on cast, same as Berserker's Potion. You can use them to dispel Spirit Vessel or other dispellable spells.", audience: [ALL]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_5_GreevilsGreed2", messageTime: 8*60, textMessage: "Whilst farming, show yourself on lanes the least possible and don't waste your Greevil's Greed stacks by hitting buildings for too long.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_6_Items", messageTime: 15*60, textMessage: "Blink Dagger or Shadow Blade allow you to cast fully channeled Unstable Concoction more easily.", audience: [ALL]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_7_Scepter", messageTime: 20*60, repeatTime: 20*60, textMessage: "Once you get closer to being 6 slotted, consider giving Aghanim's Scepter upgrades to your teammates. You might do that even earlier, if the Scepter upgrades on your allies have great impact.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Alchemist", audioFile: "ownHero/Alchemist_8_MidGame", messageTimes: [25*60, 35*60], textMessage: "Alchemist tends to fall off as the game goes. Look to close the game by the 40 min mark.", audience: [ROLE_CORE]},

    {category: "EnemyHero", hero: "Alchemist", audioFile: "heroes/Alchemist_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy spirit Vessel against Alchemist's HP regen from Chemical Rage", audience: [ALL]},
    {category: "EnemyHero", hero: "Alchemist", audioFile: "heroes/Alchemist_2_Neutral camps", messageTime: (2*60+10), textMessage: "Block neutral camps with wards against Alchemist", audience: [ALL]},
    {category: "EnemyHero", hero: "Alchemist", audioFile: "heroes/Alchemist_3_Gank", messageTime: (2*60+40), textMessage: "Don't forget to gank Alchemist", audience: [ALL]},
    {category: "EnemyHero", hero: "Alchemist", audioFile: "heroes/Alchemist_4_Bounty runes", messageTimes: [(-30), (4*60+30)], textMessage: "Alchemist gets additional gold from bouty runes. Make sure he doesn't get any", audience: [ALL]},
    {category: "EnemyHero", hero: "Alchemist", audioFile: "heroes/Alchemist_5_Jungling", messageTime: (5*60+50), textMessage: "Contest Alchemist while he is jungling", audience: [ALL]},

    // 3. Ancient Apparition | 28.02.2021
    {category: "EnemyHero", hero: "Ancient Apparition", audioFile: "heroes/Ancient Appartion_1_Cold feet", messageTime: (-60), textMessage: "When Ancient Apparition's Cold Feet is used on you, move away 715 distance or you will get stunned.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ancient Apparition", audioFile: "heroes/Ancient Appartion_2_Ice blast healing", messageTime: (8*60), textMessage: "Ancient's Ice Blast negates all healing. Avoid using healing items when affected by it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ancient Apparition", audioFile: "heroes/Ancient Appartion_3_Ice blast resistance", messageTime: (8*60+10), textMessage: "Ice Blast goes through spell immunity but is offset by magic resistance and magic barrier items.", audience: [ALL]},

    // 4. Anti-Mage | Earlier work
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_1_Laning", messageTime: (50), textMessage: "Anti-Mage is a weak laner, so look to pressure him from the start", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_2_Use mana", messageTime: (1*60+30), textMessage: "Look to spend your mana before it gets burned by Anti-Mage", audience: [IN_LANE], image: {type: "item", name: "energy_booster"}},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_3_Get mana", messageTime: (2*60+0), textMessage: "Against Anti-Mage during the laning phase buy a Magic Stick or consider buying a Soul Ring to have mana for spells ", chatMessage: "Against Anti-Mage buy Magic Stick or Soul Ring during the laning phase to have mana for spells", audience: [IN_LANE], image: {type: "item", name: "magic_stick"}},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_4_Jungling", messageTime: (10*60+30), textMessage: "Look to disrupt Anti-Mange's jungling by placing deep wards and smoking on him. Anti-Mage is weak until he gets Manta Style", chatMessage: "Disrupt Anti-Mange's jungling by placing deep wards and smoking on him. He is weak until he gets Manta Style", audience: [ALL], image: {type: "item", name: "ward_observer"}},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_5_Boots of travel", messageTime: (15*60+30), textMessage: "Consider getting Boots of Travel on one of the cores to address Anti-Mange's split push playstyle", audience: [ALL], image: {type: "item", name: "travel_boots"}},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_6_Team fights", messageTimes: [(22*60+30), (32*60+30), (42*60+30), (52*60+30)], textMessage: "In team fights look to save the hero that Anti-Mage jumps on. But be careful as you might blow up too if you get too close to a Mana Voided hero", chatMessage: "In team fights save hero that Anti-Mage jumps on, but stay away if hero gets Mana Voided", audience: [ALL], image: {type: "ability", name: "antimage_mana_void"}},
    {category: "EnemyHero", hero: "Anti-Mage", audioFile: "heroes/Anti-mage_7_Late game", messageTime: (35*60+30), textMessage: "Anti-Mage is strong mid- to late-game as he can farm rapidly, but he is not that strong in very late game", audience: [ALL]},

    // 5. Arc Warden | 28.02.2021
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_1_Flux", messageTime: (-60), textMessage: "Arc Warden's Flux does no damage to you if you are close to another unit.", audience: [ALL], image: {type: "ability", name: "arc_warden_flux"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_2_Spark wraith", messageTime: (-50), textMessage: "Arc Warden's Spark Wraith takes two seconds to charge which gives you time to dodge it.", audience: [ALL], image: {type: "ability", name: "arc_warden_spark_wraith"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_3_Magnetic field", messageTime: (-40), textMessage: "Units inside Arc's Warden's Magnetic Field can be hit if you are inside of it or have evasion piercing items.", audience: [ALL], image: {type: "ability", name: "arc_warden_magnetic_field"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_4_Pressure", messageTime: (30), textMessage: "Arc Warden is a weak laner. Pressure him early on.", audience: [ALL]},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_5_Tempest double", messageTime: (8*60), textMessage: "Arc Warden's Tempest Double gives a lot of gold and experience. Kill it if possible.", audience: [ALL], image: {type: "ability", name: "arc_warden_tempest_double"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_6_Gank", messageTime: (8*60+10), textMessage: "Arc Warden farms the jungle a lot. Plant deep wards and gank him. Also block off camps with sentries.", audience: [ALL], image: {type: "item", name: "ward_dispenser"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_7_Gap closing", messageTime: (12*60), textMessage: "Buy gap closing items to get on top of Arc Warden.", audience: [ALL], image: {type: "item", name: "blink"}},
    {category: "EnemyHero", hero: "Arc Warden", audioFile: "heroes/Arc Warden_8_Boots of travel", messageTime: (12*60+10), textMessage: "Boots of Travel allow to defend against Arc Warden's split-pushing and to quickly rejoin the team.", audience: [ALL], image: {type: "item", name: "travel_boots"}},

    // 6. Axe | 28.02.2021
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_1_Battle hunger", messageTime: (-60), textMessage: "Axe's Battle Hunger can be removed by getting a creep kill.", audience: [IN_LANE], image: {type: "ability", name: "axe_battle_hunger"}},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_2_Counter helix", messageTime: (-50), textMessage: "Avoid being close to Axe if you have bunch of allied or neutral creeps next to you.", audience: [IN_LANE], image: {type: "ability", name: "axe_counter_helix"}},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_3_Creep skipping", messageTime: (5*60), textMessage: "Bring an extra hero to gank Axe if he starts creep-skipping.", audience: [ALL]},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_4_Blink Blade Mail", messageTime: (12*60), textMessage: "Keep checking Axe's items. Be aware of his Blink Dagger and Blade Mail timing.", audience: [ALL], image: {type: "item", name: "blink"}},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_5_Clump up", messageTimes: [(12*60+10), (22*60+20), (32*60+20)], textMessage: "Don't clump up in teamfights or Axe will kill you all!", audience: [ALL], image: {type: "ability", name: "axe_berserkers_call"}},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_6_Euls", messageTime: (12*60+20), textMessage: "Consider buying an Eul's Scepter to use it on Axe quickly after he jumps your allies.", audience: [ALL], image: {type: "item", name: "cyclone"}},
    {category: "EnemyHero", hero: "Axe", audioFile: "heroes/Axe_7_Lifesteal status resistance", messageTime: (12*60+30), textMessage: "On Cores, Lifesteal and status resistance items are good against Axe's Call and Blade Mail combo.", audience: [ALL]},

    // 7. Bane | 28.02.2021
    {category: "EnemyHero", hero: "Bane", audioFile: "heroes/Bane_1_Strong laner", messageTime: (-60), textMessage: "Bane is a strong laner and good at trading hits and regaining health with Brain Sap. Bring extra consumables.", audience: [IN_LANE], image: {type: "item", name: "flask"}},
    {category: "EnemyHero", hero: "Bane", audioFile: "heroes/Bane_2_Nightmare", messageTime: (-50), textMessage: "You can unsleep an ally affected by Bane's Nightmare by attacking that ally.", audience: [ALL], image: {type: "ability", name: "bane_nightmare"}},
    {category: "EnemyHero", hero: "Bane", audioFile: "heroes/Bane_3_Fiends Grip", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Look to cancel Bane's Fiend's Grip in fights as it is a long lasting disable.", audience: [ALL], image: {type: "ability", name: "bane_fiends_grip"}},
    {category: "EnemyHero", hero: "Bane", audioFile: "heroes/Bane_4_Targetable spells", messageTime: (12*60), textMessage: "Lotus Orb, Linken's Sphere and status resistance items are good at countering Bane's spells.", audience: [ALL]},
    {category: "EnemyHero", hero: "Bane", audioFile: "heroes/Bane_5_Enfeeble", messageTime: (12*60+10), textMessage: "Avoid overpurchasing healing and regenerating items as Bane's Enfeeble reduces their effect.", audience: [ALL]},

    // 8. Batrider | 28.02.2021
    {category: "EnemyHero", hero: "Batrider", audioFile: "heroes/Batrider_1_Stick wand", messageTime: (-60), textMessage: "Magic Stick and Wand are great items against Batrider's Sticky Napalm spam.", audience: [IN_LANE], image: {type: "item", name: "magic_stick"}},
    {category: "EnemyHero", hero: "Batrider", audioFile: "heroes/Batrider_2_Sticky napalm", messageTime: (-50), textMessage: "If you have 3 or more stacks of Sticky Napalm be careful or back away to allow them to expire.", audience: [IN_LANE], image: {type: "ability", name: "batrider_sticky_napalm"}},
    {category: "EnemyHero", hero: "Batrider", audioFile: "heroes/Batrider_3_Lotus linkens", messageTime: (12*60), textMessage: "Lotus Orb and Linken's Sphere are good at countering Batrider's Flaming Lasso.", audience: [ALL]},
    
    // 9. Beastmaster | 28.02.2021
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_1_Boars", messageTime: (-60), textMessage: "Beastmaster's boars give a lot of gold and experience. Look to kill them.", audience: [IN_LANE], image: {type: "ability", name: "beastmaster_call_of_the_wild_boar"}},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_2_Hawk sentry", messageTime: (-50), textMessage: "Bring a sentry to the lane to spot and kill Beastmaster's hawks.", audience: [IN_LANE], image: {type: "item", name: "ward_sentry"}},
    // {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_3_Powerspike", messageTime: (8*60), textMessage: "Be aware of Beastmaster's level 6 and Necrobook level 1's deadly powerspike.", audience: [IN_LANE]}, |patch 7.29| MESSAGE CHANGED
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_3_Powerspike", messageTime: (8*60), textMessage: "Be aware of Beastmaster's level 6 and Helm of Dominator powerspike.", audience: [IN_LANE], image: {type: "item", name: "helm_of_the_dominator"}},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_4_Defend towers", messageTime: (8*60+10), textMessage: "Defend towers against Beastmaster. Otherwise he will invade your jungle after taking towers.", audience: [ALL]},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_5_Gank", messageTime: (10*60+10), textMessage: "Gank Beastmaster with smoke as he might have hawks around. You get double bounty as you kill his summons too.", audience: [ALL], image: {type: "item", name: "smoke_of_deceit"}},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_6_antisummons items", messageTime: (12*60), textMessage: "Consider buying a Crimson Guard and armor items against Beastmaster.", audience: [ALL], image: {type: "item", name: "crimson_guard"}},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_7_Lotus linkens", messageTime: (12*60+10), textMessage: "Lotus Orb and Linken's Sphere are good at countering Beastmaster's Primal Roar.", audience: [ALL]},
    {category: "EnemyHero", hero: "Beastmaster", audioFile: "heroes/Beastmaster_8_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Beastmaster lineups are good at taking early Roshan. Ward around Roshpit and check.", audience: [ALL]},

    // 10. Bloodseeker | 28.02.2021
    {category: "EnemyHero", hero: "Bloodseeker", audioFile: "heroes/Bloodseeker_1_Burst", messageTime: (-60), textMessage: "Thirst sustains Bloodseeker. Deal burst of damage to him so he can't lasthit creeps easily and regain HP.", audience: [IN_LANE], image: {type: "ability", name: "bloodseeker_thirst"}},
    {category: "EnemyHero", hero: "Bloodseeker", audioFile: "heroes/Bloodseeker_2_High HP", messageTime: (-50), textMessage: "Stay high on HP so that Bloodseeker doesn't become super fast.", audience: [ALL], image: {type: "item", name: "flask"}},
    {category: "EnemyHero", hero: "Bloodseeker", audioFile: "heroes/Bloodseeker_3_Rupture", messageTime: (8*60), textMessage: "When Ruptured by Bloodseeker, don't move too far and consider teleporting to base if possible.", audience: [ALL], image: {type: "ability", name: "bloodseeker_rupture"}},
    {category: "EnemyHero", hero: "Bloodseeker", audioFile: "heroes/Bloodseeker_4_Rupture counter items", messageTime: (12*60), textMessage: "Lotus Orb, Linken's Sphere and status resistance items are good at countering Rupture.", audience: [ALL]},

    // 11. Bounty Hunter | 28.02.2021
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_1_Detection", messageTime: (-60), textMessage: "To counter Bounty Hunter, bring a sentry to the lane and dust later on.", audience: [IN_LANE], image: {type: "item", name: "ward_sentry"}},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_2_Courier", messageTime: (-50), textMessage: "Bounty Hunter tends to snipe couriers, so be mindful about that.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_3_Jinada", messageTime: (-40), textMessage: "Don't make it easy for Bounty Hunter to steal your gold with Jinada hits. Step away or damage him heavily.", audience: [IN_LANE], image: {type: "ability", name: "bounty_hunter_jinada"}},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_4_Observer sentry", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "Pair observer wards with sentries to spot Bounty Hunter's movements.", audience: [ALL], image: {type: "item", name: "ward_dispenser"}},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_5_Carry detection", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Encourage your allies to carry detection on multiple heroes.", audience: [ALL], image: {type: "item", name: "dust"}},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_6_Track reveal items", messageTime: (12*60), textMessage: "Avoid buying items that grant you invisibility because of Bounty Hunter's Track.", audience: [ALL], image: {type: "ability", name: "bounty_hunter_track"}},
    {category: "EnemyHero", hero: "Bounty Hunter", audioFile: "heroes/Bounty Hunter_7_Track dispel items", messageTime: (12*60+10), textMessage: "Consider buying one of many items that allow you to dispel Track.", audience: [ALL], image: {type: "ability", name: "bounty_hunter_track"}},

    // 12. Brewmaster | 28.02.2021
    {category: "EnemyHero", hero: "Brewmaster", audioFile: "heroes/Brewmaster_1_Lock down", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Try to lock down or silence Brewmaster and kill him before he splits.", audience: [ALL], image: {type: "ability", name: "brewmaster_primal_split"}},
    {category: "EnemyHero", hero: "Brewmaster", audioFile: "heroes/Brewmaster_2_Kite", messageTimes: [(8*60+10), (18*60+10), (28*60+20)], textMessage: "Don't fight Brewmaster's Primal Split unless you have damage to kill all the Brewlings.", audience: [ALL], image: {type: "ability", name: "brewmaster_primal_split"}},
    {category: "EnemyHero", hero: "Brewmaster", audioFile: "heroes/Brewmaster_3_Dispel magic", messageTime: (12*60), textMessage: "Storm Brewling's Dispel Magic is an AOE basic dispel. So, avoid purchasing dispellable items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Brewmaster", audioFile: "heroes/Brewmaster_4_BKB", messageTime: (12*60+10), textMessage: "Black King Bar is amazing against all of the crowd control Brewmaster has.", audience: [ALL], image: {type: "item", name: "black_king_bar"}},

    // 13. Bristleback | 28.02.2021
    {category: "EnemyHero", hero: "Bristleback", audioFile: "heroes/Bristleback_1_Stick wand", messageTime: (-60), textMessage: "Magic Stick and Wand are must items against Bristleback's Quill Spray spam.", audience: [IN_LANE], image: {type: "item", name: "magic_stick"}},
    {category: "EnemyHero", hero: "Bristleback", audioFile: "heroes/Bristleback_2_Spirit vessel", messageTime: (-50), textMessage: "Someone should buy Spirit Vessel against Bristleback to counter his regeneration and healing.", audience: [ALL], image: {type: "item", name: "spirit_vessel"}},
    {category: "EnemyHero", hero: "Bristleback", audioFile: "heroes/Bristleback_3_Kite", messageTimes: [(10*60+10), (15*60+10), (20*60+20)], textMessage: "If you have no good way of dealing with Bristleback, leave and don't waste too many resources on him.", audience: [ALL]},
    {category: "EnemyHero", hero: "Bristleback", audioFile: "heroes/Bristleback_4_Silver edge", messageTime: (12*60), textMessage: "Silver Edge allows you to break Bristleeback's passives.", audience: [ALL], image: {type: "item", name: "silver_edge"}},
    {category: "EnemyHero", hero: "Bristleback", audioFile: "heroes/Bristleback_5_Armor", messageTime: (12*60+10), textMessage: "Armor items are good to counter Bristleback's physical damage output.", audience: [ALL], image: {type: "item", name: "armor"}},

    // 14. Broodmother | 28.02.2021
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_1_Laning hero", messageTime: (-60), textMessage: "Consider putting a hero that can deal with Spiderlings against her on the lane.", audience: [ALL], image: {type: "ability", name: "broodmother_spawn_spiderlings"}},
    // {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_2_Block camps", messageTime: (-50), textMessage: "Block off her camps with sentries.", audience: [ALL]}, |patch 7.29| MESSAGE CHANGED
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_2_Block camps", messageTime: (4*60+15), textMessage: "Block off her camps with sentries as she gets closer to level 6.", audience: [ALL], image: {type: "item", name: "ward_sentry"}},
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_3_Gank", messageTime: (10*60+10), textMessage: "If you are looking to gank Broodmother you need at least 3 heroes otherwise pressure other two lanes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_4_Antisummons items", messageTime: (12*60), textMessage: "Crimson Guard and armor items are good against Broodmother.", audience: [ALL], image: {type: "item", name: "crimson_guard"}},
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_5_Antihealing items", messageTime: (12*60+10), textMessage: "Healing and regeneration reducing items are good against Insatiable Hunger.", audience: [ALL]},
    // {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_6_Antievasion items", messageTime: (12*60+20), textMessage: "Evasion piercing items are good against Incapacitating Bite.", audience: [ALL]}, |patch 7.29|  MESSAGE CHANGED
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_6_Antievasion items", messageTime: (12*60+20), textMessage: "Evasion piercing items are good against Brood's Silken Bola.", audience: [ALL], image: {type: "item", name: "monkey_king_bar"}},
    {category: "EnemyHero", hero: "Broodmother", audioFile: "heroes/Broodmother_7_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Broodmother is good at taking an early Roshan. Ward around Roshpit and check.", audience: [ALL], image: {type: "item", name: "ward_dispenser"}},

    // 15. Centaur Warrunner | 01.03.2021
    {category: "EnemyHero", hero: "Centaur Warrunner", audioFile: "heroes/Centaur Warrunner_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Centaur to deal damage, offset his regeneration and cancel Blink.", audience: [ALL]},
    {category: "EnemyHero", hero: "Centaur Warrunner", audioFile: "heroes/Centaur Warrunner_2_Armor reducing items", messageTime: (-50), textMessage: "Armor reducing items are great against Centaur.", audience: [ALL]},
    {category: "EnemyHero", hero: "Centaur Warrunner", audioFile: "heroes/Centaur Warrunner_3_Antimagic items", messageTime: (12*60), textMessage: "Items that offset magical damage output from Centaur are good against him.", audience: [ALL]},
    {category: "EnemyHero", hero: "Centaur Warrunner", audioFile: "heroes/Centaur Warrunner_4_Blink dagger", messageTime: (12*60+10), textMessage: "Keep checking Centaur's items. Be aware of his Blink Dagger timing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Centaur Warrunner", audioFile: "heroes/Centaur Warrunner_5_Clump up", messageTimes: [(12*60+20), (22*60+20), (32*60+20)], textMessage: "Don't clump up in teamfights for Centaur's Blink into Hoof Stomp initiation.", audience: [ALL]},

    // 16. Chaos Knight | 01.03.2021
    {category: "EnemyHero", hero: "Chaos Knight", audioFile: "heroes/Chaos Knight_1_Burst", messageTime: (-60), textMessage: "Chaos Strike sustains Chaos Knight. Deal bursts of damage to him so he can't hit creeps easily and regain HP.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Chaos Knight", audioFile: "heroes/Chaos Knight_2_Basic dispel", messageTime: (8*60), textMessage: "Chaos Knight's Phantasm applies a basic dispel on cast.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chaos Knight", audioFile: "heroes/Chaos Knight_3_Illusions", messageTimes: [(8*60+10), (18*60+10), (28*60+10)], textMessage: "Either kills his illusions in the fights or disengage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chaos Knight", audioFile: "heroes/Chaos Knight_4_Antiillusion items", messageTime: (12*60), textMessage: "Items that deal AoE damage are good against Chaos Knight's illusions.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chaos Knight", audioFile: "heroes/Chaos Knight_5_Defensive items", messageTime: (12*60+10), textMessage: "Crimson Guard and armor items are good at offsetting Chaos Knight's physical damage output.", audience: [ALL]},

    // 17. Chen | 01.03.2021    ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_1_Block camps", messageTime: (-60), textMessage: "Against Chen, block off small and big pull camps either with a sentry or with your hero's body.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_2_Dont greed", messageTimes: [(-50), (5*60+10), (10*60+30)], textMessage: "Chen lineups tend to powerspike in early to midgame. Don't buy greedy items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_3_Gank", messageTime: (10*60+10), textMessage: "Look to gank Chen as you will kill his army as well.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_4_Antihealing items", messageTime: (10*60+20), textMessage: "Items that reduce healing are good against Chen.", audience: [ALL]},
    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_5_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Chen lineups are good at taking early Roshan. Ward around Roshpit and check.", audience: [ALL]},

    {category: "EnemyHero", hero: "Chen", audioFile: "heroes/Chen_6_Aghanims scepter", messageTimes: [(25*60+20), (35*60+20), (45*60+20)], textMessage: "Be aware of Chen applying strong dispel with Hand of God once he has Aghanim's Scepter.", audience: [ALL]},

    // 18. Clinkz | 01.03.2021  ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_1_Detection", messageTime: (-60), textMessage: "Bring a sentry to the lane and dust later on for Clinkz.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_2_Squishy", messageTime: (-50), textMessage: "Clinkz is very squishy until he has Dark Pact buff active. Pressure him early on.", audience: [IN_LANE]},

    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_6_Contest farm", messageTime: (10*60+10), textMessage: "Clinkz farms fast with Burning Barrage. Smoke on him, place deep wards and block off camps with sentries.", audience: [ALL]},

    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_3_Observer sentry", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "Pair observer wards with sentries to spot Clinkz's movements.", audience: [ALL]},
    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_4_Carry detection", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Carry detection on multiple heroes against Clinkz.", audience: [ALL]},
    {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_5_Armor", messageTime: (12*60), textMessage: "Armor items are good against Clinkz.", audience: [ALL]},
    // {category: "EnemyHero", hero: "Clinkz", audioFile: "heroes/Clinkz_6_Antievasion", messageTime: (12*60+10), textMessage: "Evasion piercing items are good against Clinkz's Strafe.", audience: [ALL]},

    // 19. Clockwerk | 01.03.2021
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_1_Observer", messageTime: (-60), textMessage: "Bring an Observer Ward to the lane to keep an eye on Clockwerk's aggressive movements.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_2_Battery assault", messageTime: (-50), textMessage: "Battery assault does a lot of damage. Keep distance from Clockwerk or share damage with allied units.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_3_Power cogs", messageTime: (30), textMessage: "If you get trapped in Power Cogs don't panic. It takes two hits to destroy a cog.", audience: [ALL]},
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_4_Solo kill", messageTime: (10*60+10), textMessage: "Clockwerk has a great solo kill potential in early to midgame. Keep track of his movements.", audience: [ALL]},
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_5_Force staff", messageTime: (12*60), textMessage: "Force Staff is great at moving you or an ally out of Power Cogs and out of Battery Assault range.", audience: [ALL]},
    {category: "EnemyHero", hero: "Clockwerk", audioFile: "heroes/Clockwerk_6_Roshan contesting", messageTimes: [(15*60), (25*60), (35*60)], textMessage: "Clockwerk is great at contesting you at Roshan. Block his Hookshot path when you are about to finish Roshan.", audience: [ALL]},

    // 20. Crystal Maiden | Earlier work
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_1_Frostbite", messageTime: (-90), textMessage: "Crystal Maiden counters heroes that don't like to be rooted such as Ember Spirit, Void Spirit and Storm Spirit. Note that Frostbite is long-lasting and has a short cooldown.", chatMessage: "Crystal Maiden counters heroes that don't like to be rooted, e.g. Ember Spirit, Void Spirit and Storm Spirit", audience: [ALL]},
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_2_Weak hero", messageTime: (-15), textMessage: "Crystal Maiden is a vulnerable hero and one of the easiest to kill during the laning phase", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_3_Crystal nova", messageTime: (20), textMessage: "Play on different sides of the lane with your coleague against Crystal Maiden such that you don't get hit both by Crystal Nova", chatMessage: "Play on different sides of the lane against Crystal Maiden such that you don't get hit both by Crystal Nova", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_4_Lane kills", messageTime: (1*60+10), textMessage: "Use moments when Crystal Maiden is away from her laning partner to land a kill on her, for example when she's pulling. Keeping her on low levels means that her team won't have high levels of Arcane Aura", chatMessage: "Try to land a kill on Crystal Maiden when she is away from her laning partner, e.g. when she's pulling", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_5_Freezing field", messageTimes: [(17*60+15), (27*60+15), (37*60+15), (47*60+17)], textMessage: "Look to disrupt Chrystal Maiden's Freezing Field channeling in fights. She will try to protect herself with Glimmer Cape or BKB", chatMessage: "Disrupt Chrystal Maiden's Freezing Field channeling in fights. She might use with Glimmer Cape or BKB", audience: [ALL]},
    {category: "EnemyHero", hero: "Crystal Maiden", audioFile: "heroes/Crystal Maiden_6_Attack speed", messageTime: (30*60+30), textMessage: "Crystal Maiden's level 20 attack speed talent is good against specific heroes or abilities such as Supernova, Tombstone and Will-o-Wisp", chatMessage: "Crystal Maiden's level 20 attack speed talent is good against heroes or abilities such as Supernova", audience: [ALL]},

    // 21. Dark Seer | 01.03.2021
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_1_Deny", messageTime: (-60), textMessage: "Against Dark Seer, focus on denying creeps as Ion Shells are making them drop low.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_2_Big camp", messageTime: (-50), textMessage: "Dark Seer will push the lane in with Ion Shell and pull the big neutral camp. Block it or prevent it.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_3_Clarity", messageTime: (30), textMessage: "Dark Seer relies on clarities to maintain Ion Shell spam. Look to cancel them.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_4_Surge cd", messageTime: (50), textMessage: "When Dark Seer's Surge is on cooldown he is vulnerable.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_5_Bad items", messageTime: (12*60), textMessage: "Avoid buying Radiance and Assault Cuirass against Dark Seer as he can replicate these items with his ulti.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dark Seer", audioFile: "heroes/Dark Seer_6_Clump up", messageTimes: [(15*60+10), (25*60+10), (35*60+10)], textMessage: "Don't clump up in teamfights for Vacuum into Wall of Replica combination of Dark Seer.", audience: [ALL]},

    // 22. Dark Willow | 01.03.2021
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_1_Squishy", messageTime: (-60), textMessage: "Dark Willow is squishy at the start and doesn't trade well.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_2_Cursed Crown", messageTime: (30), textMessage: "Under effect of Cursed Crown make sure not to get too close to your allies or they will be stunned too.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_3_Bedlam", messageTime: (8*60), textMessage: "Bedlam does a lot of damage to a single target. Share the damage with allied units.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_4_Dispel items", messageTime: (12*60), textMessage: "Items that provide dispels are generally good against Cursed Crown, Bramble Maze and Terrorize.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_5_Black King Bar", messageTime: (12*60+10), textMessage: "Black King Bar is great against Dark Willow's disables and magical damage output.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dark Willow", audioFile: "heroes/Dark Willow_6_Clump up", messageTimes: [(12*60+20), (22*60+10), (32*60+10)], textMessage: "Don't clump up in teamfights for Terrorize and Cursed Crown.", audience: [ALL]},

    // 22.5. Dawnbreaker | 11.04.2021  |patch 7.29| ALL MESSAGES ARE NEW
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_1_Spirit vessel", messageTime: (-60), textMessage: "Someone buy a Spirit Vessel to counter Dawnbreaker's healing", audience: [ALL]},
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_2_Keep distance", messageTime: (-50), textMessage: "Keep distance from Dawnbreaker so she can't use Starbreaker too often.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_3_Solar Guardian", messageTime: (8*60), textMessage: "Avoid diving enemy heroes as Dawnbreaker can assist them from anywhere on the map with Solar Guardian.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_4_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10), (40*60+10), (50*60+10)], textMessage: "Avoid clumping up against Dawnbreaker's AoE damage and disabling spells.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_5_Antihealing items", messageTime: (12*60), textMessage: "Items that reduce healing are great against Dawnbreaker's Luminosity and Solar Guardian.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dawnbreaker", audioFile: "heroes/Dawnbreaker_6_Break", messageTime: (12*60+10), textMessage: "Break effects remove Dawnbreaker's Luminosity.", audience: [ALL]},

    // 23. Dazzle | 01.03.2021
    {category: "EnemyHero", hero: "Dazzle", audioFile: "heroes/Dazzle_1_Poison touch", messageTime: (-60), textMessage: "Avoid being hit by enemy heroes while under effect of Dazzle's Poison Touch.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dazzle", audioFile: "heroes/Dazzle_2_Shadow wave", messageTime: (-50), textMessage: "Shadow Wave does a lot of damage if you are surrounded by enemy units.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dazzle", audioFile: "heroes/Dazzle_3_Spirit vessel", messageTime: (-40), textMessage: "Someone buy a Spirit Vessel to offset healing from Dazzle and to finish off the Shallow Graved hero.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dazzle", audioFile: "heroes/Dazzle_4_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Look to focus Dazzle in teamfights as he is squishy but provides a lot of sustain if left unchecked.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dazzle", audioFile: "heroes/Dazzle_5_Gap closing items", messageTime: (12*60), textMessage: "Buy gap closing items to get on top of Dazzle.", audience: [ALL]},

    // 24. Death Prophet | 01.03.2021
    {category: "EnemyHero", hero: "Death Prophet", audioFile: "heroes/Death Prophet_1_Burst", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "When Death Prophet has Exorcism on, either burst her down or run away.", audience: [ALL]},
    {category: "EnemyHero", hero: "Death Prophet", audioFile: "heroes/Death Prophet_2_Defend towers", messageTimes: [(8*60+10), (18*60+10), (28*60+10)], textMessage: "Look to defend towers against Death Prophet and fight her when Exorcism ends.", audience: [ALL]},
    {category: "EnemyHero", hero: "Death Prophet", audioFile: "heroes/Death Prophet_3_Antihealing items", messageTime: (12*60), textMessage: "Items that reduce healing are good against Death Prophet's Spirit Siphons and Exorcism.", audience: [ALL]},
    {category: "EnemyHero", hero: "Death Prophet", audioFile: "heroes/Death Prophet_4_Armor items", messageTime: (12*60+10), textMessage: "Armor items are good against physical damage of Exorcism.", audience: [ALL]},
    {category: "EnemyHero", hero: "Death Prophet", audioFile: "heroes/Death Prophet_5_Dispel items", messageTime: (12*60+20), textMessage: "Items that provide dispels are good against Death Prophet's Silence.", audience: [ALL]},

    // 25. Disruptor | Earlier work
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_1_Harassing tools", messageTime: (-10), textMessage: "Disruptor's main harassing tools is Thunder Strike. Heroes with dispel abilities are strong against him", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_2_Thunder strike", messageTime: (30), textMessage: "You can use Disruptor's Thunder Strike AOE damage by walking into your creep wave and damaging it", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_3_Teleport", messageTimes: [(1*60), (8*60+45)], textMessage: "Don't teleport in plain sight around Disruptor as you might get Glimpsed back to where you came from", audience: [ALL]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_4_Glimpse 1", messageTimes: [(11*60), (21*60)], textMessage: "Hide behind trees or run to highground before teleporting or escaping, so you don't get caught by Glimpse.", audience: [ALL]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_5_Glimpse 2", messageTime: (16*60), textMessage: "Disruptor's Glimpse can be dodged by certain spells and items such as BKB or Manta Style", audience: [ALL]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_6_BKB", messageTimes: [(33*60), (53*60)], textMessage: "All of Disruptor's spells are countered by Black King Bar until he has Aghanim's Scepter. Once he has it, you won't be able to activate Black King Bar under Static Storm as all items are muted", chatMessage: "Disruptor's spells are countered by BKB until he has Aghs, as all items are muted under Static Storm", audience: [ALL]},
    {category: "EnemyHero", hero: "Disruptor", audioFile: "heroes/Disruptor_7_Clump up", messageTimes: [(26*60), (46*60)], textMessage: "Don't clump up because of Disruptor's Kinetic Field and Static Storm combination. It takes 1.2 seconds for Kinetic Field to form so you have a small window to get out. You can't Force Staff out of it and many other mobility spells are not working", chatMessage: "Don't clump up because of Disruptor's Kinetic Field and Static Storm combination", audience: [ALL]},

    // 26. Doom | 01.03.2021
    // {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_1_Early pressure", messageTime: (-60), textMessage: "Doom is very slow and low armor hero. Pressure him early on.", audience: [IN_LANE]}, |patch 7.29| MESSAGE CHANGED
    {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_1_Early pressure", messageTime: (-60), textMessage: "Doom is a weak laner at lower levels. Pressure him early on.", audience: [IN_LANE]},
    // {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_2_Armor reducing items", messageTime: (-50), textMessage: "Armor reducing items are great against Doom.", audience: [ALL]}, |patch 7.29| MESSAGE REMOVED
    {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_3_Armor items", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "The Doom spell has long cooldown. Look to play aggressively when it is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_4_Antidoom items", messageTime: (12*60), textMessage: "Linken's Sphere, status resistance items and Lotus Orb are good at dealing with The Doom spell.", audience: [ALL]},
    {category: "EnemyHero", hero: "Doom", audioFile: "heroes/Doom_5_Aegis", messageTimes: [(15*60+10), (25*60+10), (35*60+10)], textMessage: "Acquiring Aegis for your core is a good way of dealing with The Doom spell. Look to kill Roshan.", audience: [ALL]},

    // 27. Dragon Knight | 01.03.2021
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Dragon Knight to deal high damage and offset his regeneration.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_2_Early pressure", messageTime: (-50), textMessage: "Pressure Dragon Knight early on before he gets 2 or more points in Dragon Blood.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_3_Defend towers", messageTimes: [(8*60), (13*60), (18*60)], textMessage: "Elder Dragon Form is really good at destroying towers. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_4_Blink shadow blade", messageTime: (12*60), textMessage: "Be aware of Dragon Knight's Blink Dagger or Shadow Blade timing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_5_Dragon tail counters", messageTime: (12*60+10), textMessage: "Linken's Sphere, status resistance and Lotus Orb are good against Dragon Tail.", audience: [ALL]},
    {category: "EnemyHero", hero: "Dragon Knight", audioFile: "heroes/Dragon Knight_6_Breaks", messageTime: (12*60+20), textMessage: "Break effects remove Dragon Blood - a spell that makes Dragon Knight tanky.", audience: [ALL]},

    // 28. Drow Ranger | Earlier work
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_1_Harass", messageTime: (20), textMessage: "Drow Ranger is slow and has low armor. Look to harass her as much as you can on early levels", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_2_Multishot", messageTimes: [(1*60+20), (4*60+20)], textMessage: "Avoid being in point target range of Drow Ranger when she starts channeling Multishot", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_3_Area of effect", messageTimes: [(6*60+30), (10*60+45)], textMessage: "Drow Ranger's Gust and Multishot have cone shaped area of effect. If you are on top of her look to side step or run past or through her when she uses those spells", chatMessage: "When Drow Ranger uses Gust & Multishot and you are on top of her, try to step aside, run past or through her", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_4_Gap closing", messageTime: (11*60+20), textMessage: "Gap closing items are good against Drow Ranger as she is a glass canon hero. Note that her Marksmanship is disabled when you are within 400 range of her", chatMessage: "Gap closing items are good against Drow Ranger as she is a glass canon hero", audience: [ALL]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_5_Halberd", messageTime: (14*60+10), textMessage: "Halberd's ability is amazing against Drow Ranger as it disarms her for 5 seconds. Keep in mind that Marksmanship procs pierce through evasion (true strike)", chatMessage: "Halberd's ability is amazing against Drow Ranger as it disarms her for 5 seconds", audience: [ALL]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_6_Team fights", messageTimes: [(12*60+30), (22*60+30), (32*60+30), (42*60+30)], textMessage: "Drow Ranger should be a priority target in team fights as her team loses Marksmanship aura when she dies", audience: [ALL]},
    {category: "EnemyHero", hero: "Drow Ranger", audioFile: "heroes/Drow Ranger_7_Smoke", messageTimes: [(18*60+15), (38*60+15), (58*60+15)], textMessage: "Use Smoke, to wrap around Drow Ranger and kill her", audience: [ALL]},

    // 29. Earth Spirit | 01.03.2021
    {category: "EnemyHero", hero: "Earth Spirit", audioFile: "heroes/Earth Spirit_1_Observer", messageTime: (-60), textMessage: "Bring an Observer Ward to keep an eye on Earth Spirit's aggressive movements and dodge Rolling Boulders.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Earth Spirit", audioFile: "heroes/Earth Spirit_2_Kick", messageTime: (30), textMessage: "Be careful when playing at opponent's tower as Earth Spirit can roll and kick you under the tower.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Earth Spirit", audioFile: "heroes/Earth Spirit_3_Roam", messageTimes: [(40), (3*60+30), (5*60+30)], textMessage: "Earth Spirit tends to roam a lot. Keep track of his movements and have teleport ready.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Earth Spirit", audioFile: "heroes/Earth Spirit_4_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance and spell imunity items are great against Earth Spirit's magical damage and disables.", audience: [ALL]},
    {category: "EnemyHero", hero: "Earth Spirit", audioFile: "heroes/Earth Spirit_5_Dispel items", messageTime: (12*60+10), textMessage: "Items that provide dispels are great at removing Geomagnetic Grip silence and Magnetize.", audience: [ALL]},

    // 30. Earthshaker | Earlier work
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_1_Fissure block", messageTime: (20), textMessage: "If Earthsaker is blocking the first wave with fissure, look to pull back the lane as soon as possible", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_2_Fissure kill", messageTimes: [(45), (3*60+15)], textMessage: "Earthshaker uses fissure to block off heroes and land kills. Be mindful about your positioning", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_3_Dagger 1", messageTime: (10*60+15), textMessage: "Keep checking Earthshaker to see if he has Dagger yet. Don't let him surprise you with multi-hero Echo Slam", audience: [ALL]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_4_Dagger 2", messageTime: (13*60+30), textMessage: "Once Earthshaker has Dagger or Aghanim's Scepter control him in team fights", audience: [ALL]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_5_Dagger 3", messageTime: (15*60+15), textMessage: "Earthshaker is like to have Dagger by now", audience: [ALL]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_6_Clump up", messageTimes: [(20*60+15), (30*60+15), (40*60+15), (50*60+15), (60*60+15)], textMessage: "Don`t clump up or Earthshaker might kill you all", audience: [ALL]},
    {category: "EnemyHero", hero: "Earthshaker", audioFile: "heroes/Earthshaker_7_Shadow blade", messageTimes: [(22*60+45), (42*60+45)], textMessage: "Earthshaker might also buy Shadow Blade. If he does, purchase detection", audience: [ALL]},

    // 31. Elder Titan | 02.03.2021
    {category: "EnemyHero", hero: "Elder Titan", audioFile: "heroes/Elder Titan_1_Astral spirit 1", messageTime: (-60), textMessage: "Avoid being hit by Elder Titan's Astral Spirit and consider blocking a pull camp.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Elder Titan", audioFile: "heroes/Elder Titan_2_Astral spirit 2", messageTime: (-50), textMessage: "Avoid trading with Elder Titan when the Astral Spirit returns to him.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Elder Titan", audioFile: "heroes/Elder Titan_3_Clump up", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Avoid fighting in choke spots and clumping up against Echo Stomp into Earth Splitter combo.", audience: [ALL]},
    {category: "EnemyHero", hero: "Elder Titan", audioFile: "heroes/Elder Titan_4_Natural order", messageTime: (12*60+10), textMessage: "Buy armor items, magic barrier giving items and Black King Bar against Elder Titan's Natural Order.", audience: [ALL]},
    {category: "EnemyHero", hero: "Elder Titan", audioFile: "heroes/Elder Titan_5_Astral spirit dispel", messageTime: (12*60+20), textMessage: "Astral Spirit buff on Elder Titan can be dispelled so items and spells that dispel Elder Titan are good.", audience: [ALL]},

    // 32. Ember Spirit | 02.03.2021
    {category: "EnemyHero", hero: "Ember Spirit", audioFile: "heroes/Ember Spirit_1_Flame guard dispel", messageTime: (-60), textMessage: "Flame Guard is most of Ember Spirit's damage early. Pop it with magical damage or dispel it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ember Spirit", audioFile: "heroes/Ember Spirit_2_Rune control", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Make sure you are controlling power runes against Ember Spirit. He likes to bottle and gank with those.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ember Spirit", audioFile: "heroes/Ember Spirit_3_Clump up", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Avoid clumping up against Sleight of Fist spam and triple Fire Remnant threat.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ember Spirit", audioFile: "heroes/Ember Spirit_4_Disable items", messageTime: (12*60+10), textMessage: "Items that can root or stun elusive Ember Spirit are great.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ember Spirit", audioFile: "heroes/Ember Spirit_5_Split push", messageTime: (12*60+20), textMessage: "Ember Spirit is really good at split-pushing. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 33. Enchantress | 02.03.2021
    {category: "EnemyHero", hero: "Enchantress", audioFile: "heroes/Enchantress_1_Summons", messageTime: (-60), textMessage: "Avoid laning with summon based heroes against Enchantress or use summons carefully on the lane.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Enchantress", audioFile: "heroes/Enchantress_2_Block camps", messageTime: (-50), textMessage: "Block off pull camps against Enchantress as she will control a neutral creep.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Enchantress", audioFile: "heroes/Enchantress_3_Enchant dispel", messageTime: (-40), textMessage: "Enchant applies a basic dispel, so be careful with using buffing spells, items or runes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enchantress", audioFile: "heroes/Enchantress_4_Impetus", messageTime: (-30), textMessage: "If Impetus is flying your way, run towards Enchantress or stop moving to take less damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enchantress", audioFile: "heroes/Enchantress_5_Split push", messageTime: (8*60), textMessage: "It is hard to kill Enchantress with right-clicks against Untouchable. Spells are better.", audience: [ALL]},

    // 34. Enigma | 02.03.2021
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_1_Eidolons", messageTime: (-60), textMessage: "Try to kill Eydolauns before they multiply.", chatMessage: "Try to kill Eidolons before they multiply.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_2_Blink dagger", messageTime: (12*60), textMessage: "Be aware of Enigma's Blink Dagger timing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_3_Clump up", messageTimes: [(12*60+10), (22*60+10), (32*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Blink Dagger into Black Hole combo.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_4_Black hole cd", messageTimes: [(12*60+20), (22*60+20), (32*60+20)], textMessage: "Black Hole has a long cooldown. Look for a fight when it is on cooldown.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_5_Stay back", messageTimes: [(12*60+30), (22*60+30), (32*60+30)], textMessage: "Stay back with one hero that can cancel Black Hole or save a core that is being Black Holed.", audience: [ALL]},
    {category: "EnemyHero", hero: "Enigma", audioFile: "heroes/Enigma_6_Aegis", messageTimes: [(15*60), (25*60), (35*60)], textMessage: "Having Aegis on a core hero is a protection against Black Hole. Kill Roshan on the first chance.", audience: [ALL]},

    // 35. Faceless Void | Earlier work
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_1_Time walk 1", messageTime: (20), textMessage: "Cause damage to Faceless Void over time, as he can't heal using Time Walk", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_2_Time walk 2", messageTimes: [(45), (3*60+30)], textMessage: "Attack Faceless Void after he used Time Walk", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_3_Chronosphere 1", messageTimes: [(8*60+45), (18*60+45), (28*60+45), (38*60+45), (48*60+45)], textMessage: "Faceless Void relies on Chronosphere to be effective and he will feel underwhelming if it is down. Make use of the long cooldown of his ultimate to force a fight or take an objective", chatMessage: "Faceless Void relies on Chronosphere. Make use of the long cooldown to force a fight or take an objective", audience: [ALL]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_4_Chronosphere 2", messageTimes: [(23*60+15), (33*60+15), (43*60+15), (53*60+15)], textMessage: "Don't clump up when Chronosphere is up. Save the hero that has been caught or look to interrupt the follow-up damage from Void's teammates", chatMessage: "Don't clump up when Chronosphere is up. Save the hero that has been caught", audience: [ALL]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_5_Time dilation", messageTimes: [(16*60+15), (36*60+15), (56*60+15)], textMessage: "It is recommended to have basic dispels available against Time Dilation", audience: [ALL]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_6_Chronosphere 3", messageTimes: [(26*60+15), (46*60+15)], textMessage: "Items like Aeon Disk and Aegis are good counters against Chronosphere in mid to late game. It is advised to keep buyback ready as you might want to use your first life to burn through Void's ultimate", chatMessage: "Aeon Disk and Aegis are good against Chronosphere. Also keep buyback ready and use it after Void's ultimate", audience: [ALL]},
    {category: "EnemyHero", hero: "Faceless Void", audioFile: "heroes/Faceless_7_Chronosphere 4", messageTimes: [(21*60+15), (41*60+15), (61*60+15)], textMessage: "You can try to bait out Chronosphere with smart illusion rune usage or Illusionist's Cape", audience: [ALL]},

    // 36. Grimstroke | 02.03.2021
    {category: "EnemyHero", hero: "Grimstroke", audioFile: "heroes/Grimstroke_1_Stroke of faith", messageTime: (-60), textMessage: "Stroke of Fate does more damage the more units it hits. Play on the side of the creep wave.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Grimstroke", audioFile: "heroes/Grimstroke_2_Phantoms embrace", messageTime: (30), textMessage: "Help removing Grimstroke's Phantom's Embrace from your team mates.", audience: [ALL]},
    {category: "EnemyHero", hero: "Grimstroke", audioFile: "heroes/Grimstroke_3_Ink Swell", messageTime: (-40), textMessage: "The longer you were next to Ink Swelled unit the longer you will be stunned.", audience: [ALL]},
    {category: "EnemyHero", hero: "Grimstroke", audioFile: "heroes/Grimstroke_4_Soulbind", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Against Grimstroke's Soulbind, avoid staying close to your cores, especially the mobile ones.", audience: [ALL]},
    {category: "EnemyHero", hero: "Grimstroke", audioFile: "heroes/Grimstroke_5_Counter items", messageTime: (12*60), textMessage: "Magic resistance and spell immunity items are great against Grimstroke.", audience: [ALL]},

    // 37. Gyrocopter | 02.03.2021  ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_1_Rocket barrage", messageTime: (-60), textMessage: "Rocket Barrage does a lot of damage. Keep distance from Gyrocopter or share damage with allied units.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_2_Homing missile", messageTime: (-50), textMessage: "Help destroying Homing Missile that is aimed at your team mate.", audience: [ALL]},

    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_6_Contest farm", messageTime: (10*60+10), textMessage: "Gyrocopter farms quickly with Flak Cannon. Smoke on him, place deep wards and block off camps with sentries.", audience: [ALL]},

    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_3_Antimagic items", messageTime: (12*60), textMessage: "Gyrocopter does a lot of magical damage and joins fights early. Magic resistance items are great.", audience: [ALL]},
    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_4_Antiflak items", messageTime: (12*60+10), textMessage: "Crimson Guard, Heaven's Halberd and armor items are great against Gyrocopter's Flak Cannon.", audience: [ALL]},
    {category: "EnemyHero", hero: "Gyrocopter", audioFile: "heroes/Gyrocopter_5_Lotus Orb", messageTime: (12*60+20), textMessage: "It is easy to reflect Homing Missile back to Gyrocopter with Lotus Orb.", audience: [ALL]},

    // 38. Hoodwink | 02.03.2021 - DONE
    {category: "EnemyHero", hero: "Hoodwink", audioFile: "heroes/Hoodwink_1_Bushwhack", messageTime: (-60), textMessage: "Avoid playing around trees against Hoodwink's Bushwack.", audience: [ALL]},
    {category: "EnemyHero", hero: "Hoodwink", audioFile: "heroes/Hoodwink_2_Break combo", messageTime: (30), textMessage: "You can break Acorn Shot into Bushwhack combo by cutting Acorn Shot's tree quickly.", audience: [ALL]},
    // {category: "EnemyHero", hero: "Hoodwink", audioFile: "heroes/Hoodwink_3_Sharpshooter", messageTime: (8*60), textMessage: "Hoodwink's Sharpshooter can't be cancelled and applies break effect for up to 6 seconds.", audience: [ALL]}, |patch 7.29| MESSAGE UPDATED
    {category: "EnemyHero", hero: "Hoodwink", audioFile: "heroes/Hoodwink_3_Sharpshooter", messageTime: (8*60), textMessage: "Hoodwink's Sharpshooter can't be cancelled and applies break effect for up to 5 seconds.", audience: [ALL]},
    {category: "EnemyHero", hero: "Hoodwink", audioFile: "heroes/Hoodwink_4_Antievasion items", messageTime: (12*60), textMessage: "Evasion piercing items are great against Hoodwink's Scurry.", audience: [ALL]},

    // 39. Huskar | 02.03.2021
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Huskar to offset his regeneration and deal high damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_2_Low hp", messageTime: (5*60), textMessage: "Huskar likes to play on low HP. Look to gank him early on.", audience: [ALL]},
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_3_Life break dispel", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Life Break applies basic dispel. Avoid casting dispellable spells and items before Huskar jumps.", audience: [ALL]},
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_4_Roshan", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Huskar is snowbally hero that relies on killing Roshan early on. Ward and check Roshpit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_5_Halberd", messageTime: (12*60), textMessage: "Heaven's Halberd disarms Huskar for 5 seconds and shortens Inner Fire debuff duration.", audience: [ALL]},
    {category: "EnemyHero", hero: "Huskar", audioFile: "heroes/Huskar_6_Silver edge", messageTime: (12*60+10), textMessage: "Silver Edge breaks Huskar's passive - Berserker's Blood.", audience: [ALL]},

    // 40. Invoker | Earlier work
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_1_Invoker type", messageTime: (3*60), textMessage: "Identify which Invoker type you are playing against, by looking at invoked spells and orbs above Invoker. Quas Exort Invoker is farm and burst oriented and uses the Sunstrike ability early on. While Quas Wex is ganking and control oriented and uses Tornado + EMP and Cold Snap + Urn of Shadows combinations.", chatMessage: "Quas Exort Invoker is farm and burst oriented while Quas Wex is ganking and control oriented", audience: [ALL]},
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_2_Gank", messageTime: (5*60+30), textMessage: "Invoker is squishy and the only real defense he has are his spells. Try to gank him early in the game with Smoke of Deceit and Dust of Appearance", chatMessage: "Invoker is squishy. Try to gank him early in the game with Smoke of Deceit and Dust of Appearance", audience: [ALL]},
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_3_Anti-damage", messageTimes: [(8*60+15), (15*60+15)], textMessage: "Opt for anti-magic damage items against Invoker", audience: [ALL]},
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_4_Sell combination", messageTimes: [(10*60+15), (30*60+15)], textMessage: "Dodging or surviving Invoker's opening combination of spells, makes him weak for 5 to 10 seconds depending on the cooldown of his Invoke ability.", chatMessage: "Dodging or surviving Invoker's opening combination of spells makes him weak for 5 to 10s", audience: [ALL]},
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_5_Tornado", messageTimes: [(17*60+15), (27*60+15)], textMessage: "Keep in mind that Invoker's Tornado dispells. Active rune buffs and many spells are countered by it", audience: [ALL]},
    {category: "EnemyHero", hero: "Invoker", audioFile: "heroes/Invoker_6_Cataclysm", messageTimes: [(28*60+15), (38*60+15)], textMessage: "Aghanim's Scepter grants Invoker Cataclysm spell. Be aware of it and be mindful about your hero's position during it", chatMessage: "Aghs grants Invoker Cataclysm spell. Be aware of it and be mindful about your hero's position", audience: [ALL]},

    // 41. Io | 03.03.2021
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Io to offset healing and regeneration.", audience: [ALL]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_2_Harass", messageTime: (-50), textMessage: "Harass either Io or his laning partner, not both equally.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_3_Relocate cancel", messageTime: (8*60), textMessage: "Relocate can be cancelled by disabling or silencing Io during channel time.", audience: [ALL]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_4_Io focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Io in the fights as he's good at sustaining and saving his cores.", audience: [ALL]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_5_Gap closing", messageTime: (12*60), textMessage: "Gap closing items will help you get on top of Io.", audience: [ALL]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_6_Antihealing items", messageTime: (12*60+10), textMessage: "Items that reduce healing and regeneration are great against Io.", audience: [ALL]},
    {category: "EnemyHero", hero: "Io", audioFile: "heroes/Io_7_Ratting", messageTimes: [(15*60+10), (25*60+10), (35*60+10)], textMessage: "Be careful about Io's ratting potential with Relocate.", audience: [ALL]},

    // 42. Jakiro | 03.03.2021
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_1_Cast point", messageTime: (-60), textMessage: "Cast point on Jakiro's spells are long, so you can possibly dodge them.", audience: [ALL]},
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_2_Stacking", messageTime: (-50), textMessage: "Avoid standing beside your laning partner against Dual Breath and Liquid Fire.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_3_Defend towers", messageTime: (10*60+10), textMessage: "Jakiro is great at destroying towers with Liquid Fire. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_4_Defending towers", messageTime: (10*60+20), textMessage: "Jakiro is great at defending towers alone. Jump him or consider glyphing the wave.", audience: [ALL]},
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_5_Clump up", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Avoid fighting in choke spots and clumping up against Ice Path and Macropyre combo.", audience: [ALL]},
    {category: "EnemyHero", hero: "Jakiro", audioFile: "heroes/Jakiro_6_Antimagic items", messageTime: (12*60+10), textMessage: "Magic resistance items are great against Jakiro.", audience: [ALL]},

    // 43. Juggernaut | Earlier work
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_1_Blade fury 1", messageTime: (-60), textMessage: "Juggernaut is one of the strongest laning carries as Blade Fury does more than 400 AOE damage already on level 1. Consider buying items to increase your movement speed", chatMessage: "Juggernaut's Blade Fury does more than 400 AOE damage. Consider buying items to increase your movement speed", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_2_Blade fury 2", messageTime: (45), textMessage: "Try to keep distance from Juggernaut and try to force a defensive Blade Fury. Juggernaut's mana pool is not great and Blade Fury has high cooldown on lower levels. Pressure him after he used Blade Fury", chatMessage: "Try to keep distance from Juggernaut and try to force a defensive Blade Fury Pressure him after he used it", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_3_Healing ward", messageTime: (4*60+5), textMessage: "Look to hit Juggernaut's Healing Ward as one hit is sufficient and it gives you 75 gold", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_4_Blade fury 3", messageTime: (6*60+15), textMessage: "When you are ganking Juggernaut, he will look to Blade Fury and teleport out on first sign of trouble. Make sure you surprise disable him before he spins if you do not yet have a spell immunity piercing disable", chatMessage: "Juggernaut can use Blade Fury and teleport to escape. Surprise disable him before he spins, if you can", audience: [ALL]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_5_Omnislash 1", messageTime: (8*60+15), textMessage: "Juggernaut's Omnislash jumps are random. Use surrounding creeps, illusions or heroes to split the damage", audience: [ALL]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_6_Spell immunity", messageTimes: [(10*60+30), (25*60+30), (45*60+30)], textMessage: "Items and spells that disable through spell immunity are good against Juggernaut as Blade Fury grants him spell immunity", chatMessage: "Items and spells that disable through spell immunity are good against Juggernaut and his Blade Fury", audience: [ALL]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_7_Omnislash 2", messageTimes: [(15*60+30), (35*60+30)], textMessage: "Main damaging ability of Juggernaut is Omnislash and this spell is counterable by many items. Make sure to have at least one such item for each hero", chatMessage: "Juggernaut's Omnislash is counterable by many items. Make sure to have at least one for each hero", audience: [ALL]},
    {category: "EnemyHero", hero: "Juggernaut", audioFile: "heroes/Juggernaut_8_Omnislash 3", messageTimes: [(21*60+30), (31*60+30)], textMessage: "Juggernaut's Omnislash cooldown is long with 140 seconds, which allows you to pressure him while it's down", audience: [ALL]},

    // 44. Keeper of the Light | 03.03.2021   ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_1_Observer", messageTime: (-60), textMessage: "Bring an Observer ward to your lane to see Keeper of the Light charging Illuminate.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_2_Pulling", messageTime: (-50), textMessage: "Prevent Keeper of the Light from pulling as he will push with Illuminate and then look to pull.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_3_Squishy", messageTime: (-40), textMessage: "Keeper of the Light is very squishy but really fast. One disable and he will drop low on HP.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_4_Defending towers", messageTime: (10*60+10), textMessage: "Keeper of the Light is great at defending towers alone. Jump him or consider glyphing the wave.", audience: [ALL]},
    // |patch 7.29|
    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_5_Daytime", messageTimes: [(10*60+20), (20*60+10), (30*60+10)], textMessage: "Look to fight during night-time so Keeper of the Light can't heal his allies with Illuminate.", audience: [ALL]},
    // {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_5_Recall", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Keeper of the Light can Recall additional hero to the fight. Count on them having an extra hero.", audience: [ALL]}, |patch 7.29| NEW MESSAGE

    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_7_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance and spell immunity items are great against Keeper of the Light.", audience: [ALL]},

    {category: "EnemyHero", hero: "Keeper of the Light", audioFile: "heroes/Keeper of the Light_6_Recall", messageTimes: [(20*60+20), (30*60+20), (40*60+20)], textMessage: "Aghanim's Shard on Keeper of the Light grants Recall. He can teleport allied heroes to himself.", audience: [ALL]},

    // 45. Kunkka | 03.03.2021
    {category: "EnemyHero", hero: "Kunkka", audioFile: "heroes/Kunkka_1_Tidebringer", messageTime: (-60), textMessage: "Kunkka's sword will be glowing when Tidebringer is ready. Play on the side not to get cleaved.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Kunkka", audioFile: "heroes/Kunkka_2_Torrent", messageTime: (-50), textMessage: "Kunkka will rise his sword when casting Torrent. Look to make a sharp turn.", audience: [ALL]},
    {category: "EnemyHero", hero: "Kunkka", audioFile: "heroes/Kunkka_3_Squishy", messageTime: (8*60), textMessage: "Kunkka's Ghostship allows allied heroes that were underneath it to delay 40% damage taken.", audience: [ALL]},
    {category: "EnemyHero", hero: "Kunkka", audioFile: "heroes/Kunkka_4_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Torrent and Ghostship.", audience: [ALL]},
    {category: "EnemyHero", hero: "Kunkka", audioFile: "heroes/Kunkka_5_Euls", messageTime: (12*60), textMessage: "Eul's Scepter is great at stopping X Marks the Spot pullback.", audience: [ALL]},

    // 46. Legion Commander | Earlier work
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_1_PressTheAttack", messageTime: -30, textMessage: "Consider skilling Press the Attack on level 1 if you are being harassed by dispellable damage-over-time spells.", audience: [ALL]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_2_OverwhelmingOdds", messageTime: -20, textMessage: "Use Overwhelming Odds to secure a range creep last hit and harass the enemy heroes at the same time.", audience: [ALL]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_3_MomentOfCourage", messageTime: 60, textMessage: "Aggro creeps on yourself to increase Moment of Courage procs. It can be useful for denying as well.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_4_Blink1", messageTime: 60*10, textMessage: "Take your time to farm up a Blink Dagger and then start rotating around the map with a ganking partner.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_5_Blink2", messageTime: 60*11, textMessage: "Make sure not to overblink as you will land 240 units shorter than the maximum of 1200.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_6_Duel1", messageTimes: [60*12, 60*17], textMessage: "Duelling any hero is fine in early to midgame to collect Duel victories which will then allow you to potentially solo kill heroes.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_7_AghanimsShard", messageTime: 60*20, textMessage: "Aghanim's Shard is an essential pick-up for a support Legion Commander as it is a great buff and save for your core.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_8_Duel2", messageTime: 60*20, repeatTime: 60*20, textMessage: "In mid to late game make sure to Duel specific heroes and not care about Duel victory as much.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Legion Commander", audioFile: "ownHero/Legion Commander_9_TeamFight", messageTime: 60*30, repeatTime: 60*20, textMessage: "Sometimes it is better not to initiate fights, but rather stay back to save an ally with Press the Attack and turn the fight around.", audience: [ROLE_CORE]},

    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_1_Overwhelming odds", messageTimes: [(1*60+15), (3*60+15)], textMessage: "In the lane against Legion Commander stay away from your partner to reduce impact of Overwhelming Odds", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_2_Press the attack", messageTimes: [(45), (6*60+15)], textMessage: "Avoid waisting mana on harassing Legion Commander with spells that can be dispelled by Press the Attack. Use those spells once she used Press the Attack", chatMessage: "Don't harass Legion Commander with spells that can be dispelled. Use spells once she used Press the Attack", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_3_Melee range", messageTime: (8*60+30), textMessage: "Avoid getting into melee range of Legion Commander", audience: [ALL]},
    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_4_Gap closing", messageTimes: [(8*60+15), (14*60+15)], textMessage: "Keep an eye on Legion Commander's Blink Dagger or Shadow Blade purchase. She will want to find pickoffs so it's good to group up and bait with one hero and then to counter-attack", chatMessage: "Legion Commander buys Blink Dagger or Shadow Blade to duel heroes. Group up and bait with one hero", audience: [ALL]},
    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_5_Duel counter", messageTimes: [(10*60+30), (20*60+30), (30*60+30), (40*60+30)], textMessage: "Good counters items against Legion Commander's duel are Eul's Scepter, Linken's Sphere and Ethereal Blade", audience: [ALL]},
    /* {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_6_Aghanim's scepter", messageTimes: [(23*60+30), (33*60+30), (43*60+30)], textMessage: "Legion Commander becomes spell immune when duelling with Aghanim's Scepter", audience: [ALL]}, Changed in 7.30*/
    {category: "EnemyHero", hero: "Legion Commander", audioFile: "heroes/Legion Commander_6_Aghanim's scepter", messageTimes: [(23*60+30), (33*60+30), (43*60+30)], textMessage: "Legion Commander takes 50% damage from other sources when duelling with Aghanim's Scepter", audience: [ALL]},




    // 47. Leshrac | 03.03.2021
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_1_Illusions summons", messageTime: (-60), textMessage: "Leshrac is great at dealing with illusions and summons due to high amount of AoE damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_2_Split earth", messageTime: (-50), textMessage: "Leshrac's Split Earth has a long cast point. Look to dodge it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_3_Diabolic edict", messageTimes: [(5*60), (15*60), (25*60)], textMessage: "Leshrac's Diabolic Edict does great damage against single units and buildings. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_4_Pulse Nova", messageTime: (8*60), textMessage: "Pulse Nova converts mana into AoE damage. Fight when Leshrac is low on mana or burn it away.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_5_Burst", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Look to burst Leshrac in the fights or he'll do insane amounts of damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_6_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance and spell immunity items are great against Leshrac.", audience: [ALL]},
    {category: "EnemyHero", hero: "Leshrac", audioFile: "heroes/Leshrac_7_Splitpushing", messageTime: (12*60+10), textMessage: "Leshrac is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 48. Lich | 03.03.2021
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_1_Strong laner", messageTime: (-60), textMessage: "Lich is a strong laner. Bring extra consumables.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_2_Frost shield", messageTime: (-50), textMessage: "Frost Shield from Lich significantly reduces damage taken from right-clicks and it can be used on towers.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_3_Chain frost", messageTime: (8*60), textMessage: "Split up when Lich uses Chain Frost or run towards a group of creeps to pass the bounce away.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_4_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Chain Frost.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_5_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance and spell immunity items are great against Lich.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lich", audioFile: "heroes/Lich_6_Lotus orb", messageTime: (12*60+10), textMessage: "Lotus Orb is great at reflecting 3 spells of Lich.", audience: [ALL]},

    //49. Lifestealer | Earlier work
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_1_Chip damage", messageTime: (-15), textMessage: "Chip damage doesn't work against Lifestealer as he is able to recover with Feast. If you manage to bring him below half HP it will be hard for him to feast as he risks dying", chatMessage: "Chip damage doesn't work against Lifestealer as he can Feast. Bring him below half HP to scare him", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_2_Boots", messageTime: (1*60+30), textMessage: "Buy boots early against Lifestealer as he is a fast hero who often buys Venom Orb and rushes Phase Boots", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_3_Spell immunity", messageTimes: [(8*60+30), (15*60+30), (25*60+30)], textMessage: "Items and spells that go through spell immunity are effective against Lifestealer", audience: [ALL]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_4_Escape", messageTimes: [(4*60+45), (9*60+45)], textMessage: "When you gank Lifestealer he will Rage and teleport out on first signs of trouble. Make sure you disable him before he rages if you do not yet have a disable that goes through spell immunity", chatMessage: "When you gank Lifestealer he will Rage and teleport out. Disable him before he rages", audience: [ALL]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_5_Team fights", messageTimes: [(13*60+30), (23*60+30), (33*60+30)], textMessage: "Lifestealer's main spell in fights is Rage. Play around it by disabling him or by saving heroes he is chasing", chatMessage: "Lifestealer's main spell in fights is Rage. Disable him or by save heroes he is chasing", audience: [ALL]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_6_Evasion", messageTimes: [(26*60+30), (36*60+30)], textMessage: "Lifestealer tends to have lots of evasion due to his level 20 talent and a Halberd purchase. Look to counter it by getting true strike items", chatMessage: "Lifestealer tends to have evasion due to his level 20 talent and Halberd. Counter it with true strike items", audience: [ALL]},
    {category: "EnemyHero", hero: "Lifestealer", audioFile: "heroes/Lifestealer_7_Infest", messageTimes: [(18*60+30), (28*60+30), (38*60+30)], textMessage: "Keep in mind that Lifestealer might be infested in the initiating hero or that he can use Infest to escape", audience: [ALL]},

    // 50. Lina | 03.03.2021
    {category: "EnemyHero", hero: "Lina", audioFile: "heroes/Lina_1_Light strike array", messageTime: (-60), textMessage: "Lina's Light Strike Array has a long cast point. Look to dodge it.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lina", audioFile: "heroes/Lina_2_Glass cannon", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Lina is a glass cannon type hero. Look to focus her in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lina", audioFile: "heroes/Lina_3_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance and spell immunity items are great against Lina.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lina", audioFile: "heroes/Lina_4_Gap closing", messageTime: (12*60+10), textMessage: "Gap closing items are good at getting you on top of Lina.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lina", audioFile: "heroes/Lina_5_Splitpush", messageTime: (12*60+20), textMessage: "Lina is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 51. Lion | Earlier work
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_1_EarthSpike", messageTime: 30, textMessage: "Use Earth Spike strategically so that you can get extra right-clicks in, deny a creep or secure a last hit.", audience: [ALL]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_2_Hex", messageTime: 60, textMessage: "You can skill Hex on level 2 to score a kill.", audience: [ALL]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_3_Illusions", messageTime: 90, textMessage: "Hex and Mana Drain destroy basic illusions instantly.", audience: [ALL]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_4_FingerOfDeath", messageTime: 8*60, textMessage: "Make a move whenever you have Finger of Death available.", audience: [ALL]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_5_Blink", messageTime: 10*60, textMessage: "When Finger of Death is on cooldown, use the time to farm your Blink Dagger.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_6_Initiate", messageTimes: [14*60, 19*60], textMessage: "Initiate on enemies with your long lasting disables, so your allies can follow-up for a kill.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_7_Vision", messageTime: 15*60, repeatTime: 10*60, textMessage: "Fight around good vision, so you can land multi-hero Earth Spikes.", audience: [ALL]},
    {category: "OwnHero", hero: "Lion", audioFile: "ownHero/Lion_8_AghanimsShard", messageTime: 20*60, textMessage: "Aghanim's Shard is good at countering illusion based heroes.", audience: [ALL]},

    {category: "EnemyHero", hero: "Lion", audioFile: "heroes/Lion_1_Fog of war", messageTime: (60), textMessage: "Use fog of war to cancel Lion's Mana Drain", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lion", audioFile: "heroes/Lion_2_Anti-magic items", messageTime: (2*60+30), textMessage: "Opt for anti-magic damage items against Lion", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lion", audioFile: "heroes/Lion_3_Finger of death", messageTime: (8*60), textMessage: "Be aware of Lion's level 6 Finger of Death. Infused Raindrop might help you to survive the burst", audience: [ALL]},
    {category: "EnemyHero", hero: "Lion", audioFile: "heroes/Lion_4_Lotus orb", messageTime: (10*60), textMessage: "Lotus Orb is an effective item against Lion as all of his spells are targetable", audience: [ALL]},
    {category: "EnemyHero", hero: "Lion", audioFile: "heroes/Lion_5_Team fights", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Look to target Lion in team fights as he provides a lot of control and magic damage against your cores and is also a very squishy hero", chatMessage: "Target Lion in team fights as he has control spells and magic damage and is also a squishy hero", audience: [ALL]},

    // 52. Lone Druid | 03.03.2021
    {category: "EnemyHero", hero: "Lone Druid", audioFile: "heroes/Lone Druid_1_Spirit link", messageTime: (60), textMessage: "Spirit Link heals Lone Druid every time the Bear hits. Burst Lone Druid or don't bother hitting him.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lone Druid", audioFile: "heroes/Lone Druid_2_Spirit Bear", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Lone Druid buys items for the Spirit Bear. If you kill Spirit Bear twice, he does no damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lone Druid", audioFile: "heroes/Lone Druid_3_Tower defense", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Spirit Bear does a lot of damage to buildings. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lone Druid", audioFile: "heroes/Lone Druid_4_Extend game", messageTime: (15*60), textMessage: "Lone Druid is a snowbally hero and falls off as the game goes. Look to extend the game.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lone Druid", audioFile: "heroes/Lone Druid_5_Splitpush", messageTime: (20*60), textMessage: "Lone Druid is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 53. Luna | 04.03.2021
    {category: "EnemyHero", hero: "Luna", audioFile: "heroes/Luna_1_Early harass", messageTime: (-60), textMessage: "Luna has short attack range and is susceptible to early harass, especially to magical damage.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Luna", audioFile: "heroes/Luna_2_Lunar blessing", messageTime: (-50), textMessage: "Be mindful about Luna's increased night vision from Night Blessing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Luna", audioFile: "heroes/Luna_3_Eclipse", messageTime: (8*60), textMessage: "Luna's Eclipse does a lot of damage. Keep distance from Luna or share damage with allied units.", audience: [ALL]},
    {category: "EnemyHero", hero: "Luna", audioFile: "heroes/Luna_4_Moon glaives", messageTime: (10*60+10), textMessage: "Luna farms quickly due to Moon Glaives. Smoke on her, place deep wards and block camps with sentries.", audience: [ALL]},
    {category: "EnemyHero", hero: "Luna", audioFile: "heroes/Luna_5_Clump up", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Avoid clumping up in teamfights as the Moon Glaives will bounce between you and your allies.", audience: [ALL]},

    // 54. Lycan | 04.03.2021
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_1_Early harass", messageTime: (-60), textMessage: "Lycan is a low armor hero. Pressure him with your right-clicks.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_2_Kill wolves", messageTime: (-50), textMessage: "Try to kill the wolves, especially when they are on low levels.", audience: [IN_LANE]},
    // {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_3_Powerspike", messageTime: (8*60), textMessage: "Be aware of Lycan's level 6 and Necrobook 1 timing. Perhaps you can teleport out if you are quick enough.", audience: [IN_LANE]}, |patch 7.29| MESSAGE UPDATED
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_3_Powerspike", messageTime: (8*60), textMessage: "Be aware of Lycan's level 6 and Helm of Dominator timing.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_4_Tower defense", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Lycan and his summons do a lot of damage to buildings. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_5_Extend game", messageTime: (12*60), textMessage: "Lycan is a snowbally hero and falls off. Look to extend the game. Don't be greedy with items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_6_Item counters", messageTime: (12*60+10), textMessage: "Crimson Guard and armor items are great against the physical damage output of Lycan and his units.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_7_Splitpushing", messageTime: (12*60+20), textMessage: "Lycan is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},
    {category: "EnemyHero", hero: "Lycan", audioFile: "heroes/Lycan_8_Roshan", messageTimes: [(15*60), (25*60), (35*60)], textMessage: "Lycan is able to kill Roshan early on. Ward and check Roshpit.", audience: [ALL]},

    // 55. Magnus | 04.03.2021
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_1_Skewer", messageTime: (-60), textMessage: "Be careful not to get Skewered by Magnus under the opponent's tower.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_2_Empower", messageTime: (10*60+10), textMessage: "Empower is a great farming buff for Magnus and his melee cores. Contest their jungle and block camps.", audience: [ALL]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_3_Blink dagger", messageTime: (12*60), textMessage: "Be aware of Magnus's Blink Dagger timing. Look to cancel his Dagger in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_4_Clump up", messageTimes: [(12*60+10), (22*60+10), (32*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Blink Dagger into Reverse Polarity combos.", audience: [ALL]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_5_Reverse polarity cd", messageTimes: [(12*60+20), (22*60+20), (32*60+20)], textMessage: "Reverse Polarity has a long cooldown. Look to fight opponents when it is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_6_Status resistance", messageTime: (12*60+30), textMessage: "Status resistance items shorten the disable duration of Reverse Polarity.", audience: [ALL]},
    {category: "EnemyHero", hero: "Magnus", audioFile: "heroes/Magnus_7_Aegis", messageTimes: [(15*60), (25*60), (35*60)], textMessage: "Having Aegis on a core hero is a protection against Reverse Polarity. Kill Roshan on the first chance.", audience: [ALL]},

    // XXX. Marci | 31.10.2021
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_1_Dispose1", messageTime: -30, repeatTime: 20*60, textMessage: "Look to Dispose an enemy in direction of your allies or to stun more enemies on landing.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_2_Dispose2", messageTime: 10*60, repeatTime: 20*60, textMessage: "You can Dispose an ally out of trouble, even from spells like Chronosphere or Black Hole.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_3_Rebound", messageTime: 3*60, repeatTime: 30*60, textMessage: "You can save an ally by using Rebound on him as it provides movement speed bonus.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_4_Dispel", messageTime: 14*60, repeatTime: 30*60, textMessage: "Be aware of spells and items that can dispel by Sidekick or Rebound.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_5_Kite", messageTime: 12*60, repeatTime: 30*60, textMessage: "Many spells and items can kite Marci during Unleash. Counter them with items or choose the right moment to engage and be ready to switch targets.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_6_Blink", messageTime: 16*60, textMessage: "Blink Dagger is a huge powerspike as it allows you to lock on or switch targets, initiate fights or save allies.", audience: [ALL]},
    {category: "OwnHero", hero: "Marci", audioFile: "ownHero/Marci_7_Roshan", messageTime: 20*60, textMessage: "Unleash and Sidekick are great tools for killing Roshan.", audience: [ROLE_CORE]},

    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy spirit Vessel against Marci's Sidekick.", audience: [ALL]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_2_Dispose", messageTime: (-30), textMessage: "Avoid staying too close to Marci as you'll get Disposed easily.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_3_Unleash", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Kite Marci's ultimate by either stopping her from attacking or disengaging.", audience: [ALL]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_4_Kiting items", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "Acquire items that allow you to kite Marci's ultimate defensively or offensively.", audience: [ALL]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_5_Antihealing items", messageTimes: [(12*60+10), (22*60+10), (32*60+10)], textMessage: "Items that reduce healing and regeneration are good against Marci's Sidekick.", audience: [ALL]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_6_Dispel items", messageTimes: [(12*60+20), (22*60+20), (32*60+20)], textMessage: "Items that can dispel Sidekick or Rebound buff from Marci or her ally are great purchase.", audience: [ALL]},
    {category: "EnemyHero", hero: "Marci", audioFile: "heroes/Marci_7_Blink dagger", messageTime: (15*60), textMessage: "Be aware of Marci's Blink Dagger timing. She can easily gap close, setup kills with Dispose or lock on targets during Unleash.", chatMessage: "Be aware of Marci's Blink Dagger timing. She can easily gap close, setup kills with Dispose or Unleash.", audience: [ALL]},

    // 56. Mars | 04.03.2021
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_1_Avoid trees", messageTime: (-60), textMessage: "Avoid playing close to trees against Spear of Mars. Cut some with Quelling Blade and Tangoes.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_2_Bulwark", messageTime: (30), textMessage: "Mars takes reduced damage from front and sides. Hit him from the back if possible.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_3_Arena of blood 1", messageTime: (8*60), textMessage: "No range attacks can hit inside or outside of the Arena of Blood.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_4_Arena of blood 2", messageTime: (8*60+10), textMessage: "Arena of Blood destroys all the trees around it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_5_Blink dagger", messageTime: (12*60), textMessage: "Be aware of Mars's Blink Dagger timing. Look to cancel his Dagger in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_6_Clump up", messageTimes: [(12*60+10), (22*60+10), (32*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Blink Dagger into Arena of Blood combo.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_7_Black king bar", messageTime: (12*60+20), textMessage: "Black King Bar allows you to move in and out of Arena of Blood.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mars", audioFile: "heroes/Mars_8_Break", messageTime: (12*60+30), textMessage: "Break effects remove Bulwark and Mars becomes significantly weaker.", audience: [ALL]},

    // 57. Medusa | 04.03.2021
    {category: "EnemyHero", hero: "Medusa", audioFile: "heroes/Medusa_1_Mystic snake", messageTime: (-60), textMessage: "Play on the side of the creepwave to avoid being hit by Mystic Snake - Medusa's main laning spell.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Medusa", audioFile: "heroes/Medusa_2_Stone gaze", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Look to kill Medusa before she activates her Ulti. If Stone Gaze is up, turn or run away from Medusa.", audience: [ALL]},
    {category: "EnemyHero", hero: "Medusa", audioFile: "heroes/Medusa_3_Contest farm", messageTime: (10*60+10), textMessage: "Medusa farms quickly due to Split Shot. Smoke on her, place deep wards and block off camps with sentries.", audience: [ALL]},
    {category: "EnemyHero", hero: "Medusa", audioFile: "heroes/Medusa_4_Mana burn", messageTime: (12*60), textMessage: "Mana burning spells and items are great against Medusa.", audience: [ALL]},
    {category: "EnemyHero", hero: "Medusa", audioFile: "heroes/Medusa_5_Counter items", messageTime: (12*60+10), textMessage: "Crimson Guard, armor items and Heaven's Halberd are great against Medusa.", audience: [ALL]},

    // 58. Meepo | 04.03.2021
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_1_Spirit vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Meepo to counter healing from Ransack.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_2_Contest farm", messageTime: (6*60), textMessage: "Meepo farms quickly due to Poof. Smoke on him, place deep wards and block off camps with sentries.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_3_Burst", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Look to burst one of the Meepos and don't split your damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_4_Tower defense", messageTime: (10*60+20), textMessage: "Meepo takes buildings down fast. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_5_Greedy", messageTime: (12*60), textMessage: "Meepo is snowbally hero and falls off. Don't be greedy with items and allow him to pick you off.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_6_Counter items", messageTime: (12*60+10), textMessage: "Crimson Guard and armor items are great against Meepo.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_7_Roshan", messageTimes: [(12*60+20), (22*60+20), (32*60+20)], textMessage: "Meepo is able to solo kill Roshan early on. Ward and check Roshpit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Meepo", audioFile: "heroes/Meepo_8_Splitpush", messageTime: (12*60+30), textMessage: "Meepo is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 59. Mirana | 04.03.2021
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_1_Observer ward", messageTime: (-60), textMessage: "Bring an Observer Ward to the lane to be able to see Mirana's Sacred Arrows.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_2_Creep shield", messageTime: (-50), textMessage: "Play around your creeps and use them as a shield against Mirana's Sacred Arrow.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_3_Block big camp", messageTime: (-40), textMessage: "Consider blocking the big pull camp. Mirana likes to farm the big neutral creep with Sacred Arrow.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_4_Roam", messageTimes: [(3*60+30), (5*60+30), (7*60+30)], textMessage: "Mirana roams a lot. Keep track of her movements and have teleport ready.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_5_Observer sentry", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "Pair Observer Wards and Sentries on map to see opponents approaching under Moonlight Shadow.", audience: [ALL]},
    {category: "EnemyHero", hero: "Mirana", audioFile: "heroes/Mirana_6_Detection", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Carry detection on multiple heroes against Moonlight Shadow.", audience: [ALL]},

    // 60. Monkey King | Earlier work
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_1_Mischief1", messageTime: -50, textMessage: "Turning into courier form with Mischief allows you to sneak up to opponents or snipe their couriers in the base. The opponents can't see you on minimap.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_2_Mischief2", messageTime: -20, textMessage: "Well timed Mischief allows you to dodge the damage coming from attacks and spells but not the debuffs coming with that spell or attack.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_3_BoundlessStrike", messageTime: 30, textMessage: "Consider skilling Boundless Strike on level 1 to secure range creep lasthit if you don't see yourself getting Jingu Mastery stacks up.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_4_JinguMastery", messageTime: 40, textMessage: "Acquiring Jingu stacks or a threat of getting them is the way Monkey King wins the lane. Orb of Venom and early boots help with that.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_5_TreeDance1", messageTime: 2*60+30, textMessage: "If the lane is rough consider putting more points in Tree Dance for creep clearing and work on solving mana issues to be able to spam it.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_6_CuttingTrees", messageTime: 3*60+30, repeatTime: 20*60, textMessage: "Many spells and items can cut trees you are standing on, including those coming from your allies. Be careful about that.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_7_TreeDance2", messageTime: 12*60+30, textMessage: "Pillar and Tinker wards as well as spells that provide flying vision when used, can spot you standing on the trees.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_8_WukongCommand1", messageTime: 6*60+30, textMessage: "You should skip skilling Wukong Command on level 6 in most of the games as it is hard to keep opponents inside of it early on.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_9_WukongCommand2", messageTime: 7*60+30, textMessage: "Channeling Wukong command from a tree will make you drop down from it without being stunned. You can jump back on the tree and the ulty will keep going.", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_10_WukongCommand3", messageTime: 10*60, repeatTime: 20*60, textMessage: "To get a good Wukong Command ideally channel it outside of opponents' vision and follow up with Boundless Strike. ", audience: [ALL]},
    {category: "OwnHero", hero: "Monkey King", audioFile: "ownHero/Monkey King_11_Soldiers", messageTime: 16*60, textMessage: "Items that modify attacks or have proc chance - except for Basher - will work on Monkey King soldiers.", audience: [ALL]},

    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_1_Melee cores", messageTime: (-90), textMessage: "Monkey King is one of the strongest laners against melee heroes, as it is easy for him to get Jingu Mastery stacks up. Ranged heroes have better time against him in general as he has low armor and simple right clicks tend to do good work", chatMessage: "Monkey King is strong laner against melee heroes due to Jingu Mastery. Consider picking ranged hero", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_2_Speed", messageTime: (-60), textMessage: "Early boots or even a Windlace are advisable for melee cores against Monkey King", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_3_Mischief", messageTime: (-30), textMessage: "Be careful on initial bounty runes as Monkey might come from behind while under the effect of Mischief (as courier). You can't see him on the minimap while under the effect of Mischief. He also doesn't aggro towers while Mischiefed so he might even run into your base and snipe couriers", chatMessage: "Monkey might come from behind while under the effect of Mischief. You can't see him on the minimap", audience: [ALL]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_4_Jingu mastery 1", messageTime: (15), textMessage: "Prevent Monkey King from getting four stacks of Jingu Mastery. But if it happens avoid staying in one line for multi-hero Boundless Strike", chatMessage: "Prevent Monkey King from getting four stacks of Jingu Mastery", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_5_Melee laning", messageTime: (50), textMessage: "Melee cores should avoid laning directly against Monkey King. Try to hijack, skip or pull creeps", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_6_Cutting trees", messageTime: (2*60+15), textMessage: "Cutting trees that Monkey King stands on stuns him for 4 seconds. Having a quelling blade or a tree cutting ability is very useful against him", chatMessage: "Cutting trees that Monkey King stands on stuns him for 4 seconds", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_7_Jingu mastery 2", messageTime: (8*60+30), textMessage: "Break effects are good at reducing Monkey Kings' damage output and Spirit Vessel reduces healing from Jingu Mastery stacks", chatMessage: "Break effects reduce Monkey Kings' damage output and Spirit Vessel reduces healing from Jingu Mastery", audience: [ALL]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_8_Ultimate", messageTimes: [(16*60+30), (36*60+30), (56*60+30)], textMessage: "Monkey King's ultimate grants him bonus armor and he therefore takes little physical damage. Dealing magical and pure damage is the priority. If Monkey King uses Black King Bar you should not fight him inside Wukong's Command ring", chatMessage: "Monkey King takes little physical damage inside Wukong's Command ring. Magical and pure damage are good", audience: [ALL]},
    {category: "EnemyHero", hero: "Monkey King", audioFile: "heroes/Monkey King_9_Force out", messageTimes: [(26*60+30), (46*60+30)], textMessage: "Items and abilities that force Monkey King out of his ultimate are valuable", audience: [ALL]},

    // 61. Morphling | 04.03.2021
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_1_Sprit Vessel", messageTime: (-60), textMessage: "Someone should buy Spirit Vessel against Morphling to offset Attribute Shift strength gain.", audience: [ALL]},
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_2_Pressure early", messageTime: (-50), textMessage: "Morphling is very weak until level 3 when he gets second point in Attribute Shift. Pressure him early on.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_3_Low hp pool", messageTime: (10*60+10), textMessage: "Morphling tends to play on a low hp pool. Surprise him with smoke, instant disable, silence or invisibility.", audience: [ALL]},
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_4_Focus", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Focus Morphling in the fights or he will do insane amounts of damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_5_Ethereal", messageTime: (13*60), textMessage: "Be aware of Ethereal Blade timing on Morphling. He can solo kill most of the heroes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Morphling", audioFile: "heroes/Morphling_6_Eye of Skadi", messageTime: (15*60), textMessage: "Eye of Skadi is good against Morphing to offset Attribute Shift strength gain and to slow him.", audience: [ALL]},

    // 62. Naga Siren | 05.03.2021
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_1_Kill images", messageTime: (-60), textMessage: "Kill Mirror Images to cripple Naga's last hitting capabilities on the lane.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_2_Mirror image", messageTime: (-50), textMessage: "Hex, Drains and Dagon destroy Mirror Images instantly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_3_Contest farm", messageTime: (10*60+10), textMessage: "Naga Siren farms quickly with Mirror Images. Smoke on her, place deep wards and block camps with sentries.", audience: [ALL]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_4_AoE items", messageTime: (12*60), textMessage: "Items that provide AoE damage, especially magical damage, are great at dealing with Mirror Images.", audience: [ALL]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_5_Counter items", messageTime: (12*60+10), textMessage: "Crimson Guard and armor items are great against Naga's physical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_6_Boots of travel", messageTime: (12*60+30), textMessage: "Naga is great at split-pushing and ratting. Consider getting Boots of Travel on a Core.", audience: [ALL]},
    {category: "EnemyHero", hero: "Naga Siren", audioFile: "heroes/Naga Siren_7_Roshan", messageTimes: [(15*60), (25*60), (35*60)], textMessage: "Naga can pop Song of the Siren and finish Roshan. Be mindful about it when taking or contesting Roshan.", audience: [ALL]},

    // 63. Nature's Prophet | 05.03.2021
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_1_Courier sniping", messageTime: (-60), textMessage: "Nature's Prophet is great at sniping couriers. Fly courier over trees when possible", audience: [ALL]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_2_Antisprout items", messageTime: (30), textMessage: "To counter Nature Prophet's Sprout, buy Quelling Blade, Tangoes or Force Staff.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_3_Tango sprout", messageTime: (40), textMessage: "Using Tango on Sprout tree gives you twice as much regeneration.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_4_Wrath of nature", messageTime: (8*60), textMessage: "Wrath of Nature can hit you with up to 400 damage at level6.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_5_Wrath of nature vision", messageTime: (8*60+10), textMessage: "If Wrath of Nature hits you and there are no enemies around, then you are close to an Observer ward.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_6_Tower defense", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Nature's Prophet can take down buildings fast. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nature's Prophet", audioFile: "heroes/Nature's Prophet_7_Splitpushing", messageTime: (12*60), textMessage: "Nature's Prophet is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 64. Necrophos | 05.03.2021
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_1_Spirit Vessel", messageTime: (-60), textMessage: "To counter Necrophos' healing and regeneration, someone should buy Spirit Vessel", audience: [ALL]},
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_2_Burst", messageTime: (-50), textMessage: "Burst Necrophos down, so he can't last hit creeps and regain HP and mana with Heartstopper Aura.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_3_Ghost Shroud", messageTime: (30), textMessage: "Necrophos takes increased magical damage under Ghost Shroud.", audience: [ALL]},
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_4_Reapers Scythe", messageTime: (8*60), textMessage: "Against Necrophos, keep your health above 60% to avoid being killed by Reaper's Scythe.", audience: [ALL]},
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_5_Antimagic items", messageTime: (12*60), textMessage: "Against Necrophos, magic resistance and spell immunity items are great.", audience: [ALL]},
    {category: "EnemyHero", hero: "Necrophos", audioFile: "heroes/Necrophos_6_Antihealing items", messageTime: (12*60+10), textMessage: "Against Necrophos, items that reduce healing and regeneration are good.", audience: [ALL]},

    // 65. Night Stalker | 05.03.2021
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_1_Pressure early", messageTime: (10), textMessage: "Night Stalker is weak in the first 5 minutes of the game. Pressure him early.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_2_5 minutes", messageTime: (4*60+30), textMessage: "Night Stalker will fight you at the 5 minute mark, as night time will hit.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_3_Dark Ascension", messageTime: (8*60), textMessage: "Night Stalker's Dark Ascension will allow him to see you inside or behind trees.", audience: [ALL]},
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_4_Daytime", messageTimes: [(8*60+10), (18*60+10), (28*60+10)], textMessage: "Look to fight during daytime and when Dark Ascension is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_5_Force", messageTime: (12*60), textMessage: "Force Staff and Hurricane Pike are great items against Night Stalker's Crippling Fear.", audience: [ALL]},
    {category: "EnemyHero", hero: "Night Stalker", audioFile: "heroes/Night Stalker_6_Break", messageTime: (12*60+10), textMessage: "Break effects remove Hunter in the Night and Nightstalker becomes significantly weaker.", audience: [ALL]},

    // 66. Nyx Assassin | 05.03.2021
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_1_Spiked carapace", messageTime: (30), textMessage: "Be careful not to use a major damaging spell when Spiked Carapace is on or Nyx Assassin is about to use it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_2_Stick mana boots", messageTime: (40), textMessage: "To counter Nyx Assassin's mana burn, get a Magic Stick or Arcane Boots.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_3_Observer sentry", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "To see Nyx under Vendetta buy Sentries and Observer Wards.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_4_Detection", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Carry detection on multiple heros.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_5_Spell immunity", messageTime: (12*60), textMessage: "Spell immunity is great against Nyx.", audience: [ALL]},
    {category: "EnemyHero", hero: "Nyx Assassin", audioFile: "heroes/Nyx Assassin_6_Mana burn", messageTime: (12*60), textMessage: "Avoid buying too many intelligence giving items against Nyx Assassin's Mana Burn.", audience: [ALL]},

    // 67. Ogre Magi | Earlier work
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_1_Tankiness", messageTime: 30, textMessage: "Play in front of your Core to to make use of your tankiness.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_2_Ignite1", messageTime: 5*60, textMessage: "Ignite has a much longer cast range than Fireblast, so cast it first.", audience: [ALL]},
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_3_Multicast", messageTime: 10*60, textMessage: "Prioritize items that you can multicast with.", audience: [ALL]},
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_4_Ignite2", messageTime: 12*60, textMessage: "Look to Ignite the heroes with Blink Dagger to keep it canceled continuously.", audience: [ALL]},
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_5_Squishy", messageTime: 15*60, textMessage: "You become a lot squishier as the game progresses, so don't play too aggressive.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Ogre", audioFile: "ownHero/Ogre_6_Bloodlust", messageTime: 17*60, repeatTime: 20*60, textMessage: "Bloodlust your right-click Cores prior and during a fight.", audience: [ALL]},

    {category: "EnemyHero", hero: "Ogre Magi", audioFile: "heroes/Ogre Magi_1_Physical damage", messageTime: (-15), textMessage: "Physical damage doesn't do much against Ogre as he has high starting armor and HP regeneration. Either ignore him or try to inflict a lot of damage in a short period of time", chatMessage: "Ogre is resistant to physical damage. Either ignore him or try to inflict a lot of damage quickly", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Ogre Magi", audioFile: "heroes/Ogre Magi_2_Magic resistance", messageTime: (1*60+30), textMessage: "Opt for magic resistance items against Ogre", audience: [ALL]},
    {category: "EnemyHero", hero: "Ogre Magi", audioFile: "heroes/Ogre Magi_3_Hand of midas", messageTime: (5*60+30), textMessage: "Ogre players tend to go greedy and farm up Hand of Midas. Try to mess with their Midas timing - cooldown is 90 seconds", chatMessage: "Ogre tends to go greedy and farm Hand of Midas. Try to mess with his Midas timing (cooldown of 90 seconds)", audience: [ALL]},
    {category: "EnemyHero", hero: "Ogre Magi", audioFile: "heroes/Ogre Magi_4_Lotus orb", messageTime: (8*60+30), textMessage: "Lotus Orb is an effective item against Ogre as both of his damaging spells are targetable", audience: [ALL]},
    {category: "EnemyHero", hero: "Ogre Magi", audioFile: "heroes/Ogre Magi_5_Multicast", messageTime: (10*60+30), textMessage: "Ogre is scary in late game as he's able to multicast also on his items. Black King Bar is mandatory for cores and even supports should consider buying it", chatMessage: "Ogre is scary in late game. BKB is mandatory for cores and even supports should consider buying it", audience: [ALL]},

    // 68. Omniknight | 05.03.2021
    {category: "EnemyHero", hero: "Omniknight", audioFile: "heroes/Omniknight_1_Purification", messageTime: (-60), textMessage: "Omniknight's Purification will damage you if you are in melee range of him.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Omniknight", audioFile: "heroes/Omniknight_2_Heavenly grace", messageTime: (-50), textMessage: "Omniknight's Heavenly Grace applies strong dispel. Use your disables after it expires.", audience: [ALL]},
    {category: "EnemyHero", hero: "Omniknight", audioFile: "heroes/Omniknight_3_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Omniknight in the fights as he provides saves and sustain for his team.", audience: [ALL]},
    {category: "EnemyHero", hero: "Omniknight", audioFile: "heroes/Omniknight_4_Guardian angel dispel", messageTime: (12*60), textMessage: "Spell and items that dispel are great again Omniknight's Guardian Angel and Heavenly Grace.", audience: [ALL]},
    {category: "EnemyHero", hero: "Omniknight", audioFile: "heroes/Omniknight_5_Magical damage items", messageTime: (12*60+10), textMessage: "Items that do magical damage are great against Guardian Angel.", audience: [ALL]},

    // 69. Oracle | 05.03.2021
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_1_StrongDispel", messageTime: -30, textMessage: "Oracle has access to both basic and strong dispel. Look to dispel spells, items and runes that provide buffs or debuffs.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_2_DenyCreep", messageTime: 30, textMessage: "You can deny on your own creep by nuking it with purifying flames and quickly attacking it afterwards.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_3_Powerspike", messageTime: (2*60+30), textMessage: "Oracle has a huge powerspike at level3 with one point in Fortune's End and two points in Purifying Flames. Combine Purifying Flames followed by Fortune's End and another Purifying Flames before Fortune's End lands on the enemy hero.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_4_Salve", messageTime: (5*60+30), textMessage: "It is good to carry a Healing Salve to use it on the ally that you save with False Promise.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_5_FortunesEnd", messageTime: (6*60), textMessage: "You can channel Fortune's End on your nearby ally that is teleporting or blinking out and the Fortune's End will follow that ally.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_6_CounterSilences", messageTime: (6*60+15), textMessage: "If you expect to be silenced in next 2.5s, you can start channeling Fortune's End on yourself and as soon as you get silenced you will dispel it instantly with Fortune's End release.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_7_FatesEdit", messageTime: (6*60+30), textMessage: "Well timed Fate's Edict can entirely negate damage the output of heavy magical spells like Reaper's Scythe, Finger of Death, Bedlam and others.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_8_OutsideVision", messageTime: (10*60), repeatTime: 10*60, textMessage: "Position yourself outside of the opponents' vision at the start of a teamfight as you are usually the main target.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_9_UltiItems", messageTime: (10*60+30), textMessage: "Items like Aether Lens or Blink Dagger allow yout to get your Ulti off well. If you False Promise yourself you can blink out even under attack as you take no damage.", audience: [ALL]},
	{category: "OwnHero", hero: "Oracle", audioFile: "ownHero/Oracle_10_ExtraHealing", messageTime: (15*60), repeatTime: 10*60, textMessage: "You can spam Purifying Flames on one of your allies prior to a fight to provide some extra healing going into the fight.", audience: [ALL]},	
	
    {category: "EnemyHero", hero: "Oracle", audioFile: "heroes/Oracle_1_Fortunes end", messageTime: (-60), textMessage: "Oracle's Fortune's End applies dispel. Use your spells after it has been used.", audience: [ALL]},
    {category: "EnemyHero", hero: "Oracle", audioFile: "heroes/Oracle_2_Fates edict", messageTime: (30), textMessage: "Oracle's Fate's Edict negates all magical damage. Do not waste your magical damage on it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Oracle", audioFile: "heroes/Oracle_3_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Oracle in the fights as he provides saves and sustain for his team.", audience: [ALL]},
    {category: "EnemyHero", hero: "Oracle", audioFile: "heroes/Oracle_4_Antihealing items", messageTime: (12*60), textMessage: "Items that reduce healing and regeneration are good against Oracle.", audience: [ALL]},
    {category: "EnemyHero", hero: "Oracle", audioFile: "heroes/Oracle_5_Gap closing items", messageTime: (12*60+10), textMessage: "Gap closing items allow you to get on top of Oracle.", audience: [ALL]},

    // 70. Outworld Destroyer | 05.03.2021
    {category: "EnemyHero", hero: "Outworld Destroyer", audioFile: "heroes/Outworld Destroyer_1_Meteor hammer", messageTime: (6*60), textMessage: "Look for Outworld Destroyer's Meteor Hammer timing. He's able to solo kill most of the heroes with it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Outworld Destroyer", audioFile: "heroes/Outworld Destroyer_2_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Outworld Destroyer in the fights as he provides saves for his team with Astral Imprisonment.", audience: [ALL]},
    {category: "EnemyHero", hero: "Outworld Destroyer", audioFile: "heroes/Outworld Destroyer_3_Mana pool items", messageTime: (12*60), textMessage: "Mana pool increasing items are great against OD's Sanity's Eclipse.", audience: [ALL]},
    {category: "EnemyHero", hero: "Outworld Destroyer", audioFile: "heroes/Outworld Destroyer_4_Spell immunity", messageTime: (12*60+10), textMessage: "Spell immunity items are great against Outworld Destroyer.", audience: [ALL]},
    {category: "EnemyHero", hero: "Outworld Destroyer", audioFile: "heroes/Outworld Destroyer_5_Heaven's Halberd", messageTime: (12*60+20), textMessage: "Heaven's Halberd is great at disabling Outworld Destroyer from using Arcane Orb.", audience: [ALL]},

    // 71. Pangolier | 06.03.2021   ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_1_Squishy", messageTime: (-60), textMessage: "Pangolier has a low HP pool and is squishy. Pressure him early on, especially when Swashbuckle is on cooldown.", chatMessage: "Pangolier is squishy. Pressure him early on.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_2_Rolling thunder", messageTime: (8*60), textMessage: "Pangolier's Rolling Thunder can be dodged by making sharp turns prior to impact.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_3_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Rolling Thunder.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_4_Spell immunity", messageTime: (12*60), textMessage: "Spell immunity items are great against Pangolier's disables and disarms.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_5_Root leash", messageTime: (12*60+10), textMessage: "Spells and items that provide roots or leash, stop Pangolier from using Swashbuckle and Rolling Thunder.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_6_Spell immunity piercing", messageTime: (12*60+20), textMessage: "Spell immunity piercing spells and items are great at dealing with Pangolier's Rolling Thunder.", audience: [ALL]},

    {category: "EnemyHero", hero: "Pangolier", audioFile: "heroes/Pangolier_7_Dispel items", messageTime: (12*60+30), textMessage: "Items and spells that can dispel enemies are great at removing Shield Crash buff from Pangolier.", audience: [ALL]},

    // 72. Phantom Assassin | Earlier work | UPDATED ON 06.03. (message on magic stick added)
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_1_Magic stick", messageTime: (-60), textMessage: "PA uses Stifling Dagger frequently to obtain lasthits. Buy Magic Stick and Magic Wand to get charges.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_2_Spell harass", messageTime: (30), textMessage: "PA is weak against spell harass in early game. Manage your mana and pressure her", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_3_Armor items", messageTime: (5*60+15), textMessage: "Armor items are good against PA as she is all about physical damage and armor reduction", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_4_Survival items", messageTime: (6*60+15), textMessage: "Cheap items that allow you to survive PA's Phantom Strike are Ghost Scepter, Glimmer Cape and Eul's Scepter", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_5_Blur ability", messageTime: (8*60+15), textMessage: "Counter PA's Blur ability with items piercing through evasion, breaking passive or causing magical damage", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_6_Blade mail", messageTime: (10*60+15), textMessage: "PA can be killed by a well timed Blade Mail", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Assassin", audioFile: "heroes/Phantom Assassin_7_Power runes", messageTimes: [(11*60+15), (19*60+15), (27*60+15)], textMessage: "Control power runes to prevent PA from getting double damage", audience: [ALL]},

    // 73. Phantom Lancer | Earlier work
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_1_ Doppelganger", messageTime: (25), textMessage: "Phantom Lancer's main escape mechanism is Doppelganger. As this spell has a very long cooldown at lower levels, look to play aggressively as soon as he used it", chatMessage: "Phantom Lancer's main escape mechanism is Doppelganger. Look to play aggressively as soon as he used it", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_2_Diffusal Blade 1", messageTime: (6*60+30), textMessage: "Pressure Phantom Lancer while he's farming Diffusal Blade. He's very weak until he gets that item. Smoke on him and place wards in his jungle", chatMessage: "Phantom Lancer is weak until he gets Diffusal Blade. Place wards in his jungle and smoke on him", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_3_Diffusal Blade 2", messageTime: (15*60+15), textMessage: "Phantom Lancer's main item is Diffusal Blade. Items that give you and your team burst of mana are good against him. Sample items are Magic Wand, Soul Ring, Arcane Boots, Arcane Ring, and Enchanted Mango", chatMessage: "Phantom Lancer's main item is Diffusal Blade. Buy items that give you and your team burst of mana", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_4_Illusions 1", messageTime: (25*60+15), textMessage: "Use AOE nuke to weaken Phantom Lancer's illusions to figure out which one is the real hero", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_5_Illusions 2", messageTime: (21*60+0), textMessage: "Spells like Lion's and Shadow Shaman's Hex and Pugna's Life Drain are able to destroy Phantom Lancer's illusion instantly. That can help when the illusion count is low, but not when there are plenty of them", chatMessage: "Phantom Lancer illusions can be killed by spells like Lion's and Shadow Shaman's Hex and Pugna's Life Drain", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_6_AOE damage", messageTime: (17*60+0), textMessage: "Against Phantom Lancer purchase items that are dealing AOE damage, preferably magical damage. For example Mjollnir, Radiance or Shiva's Guard. Battlefury is good as well but Phantom Lancer has a lot of armor and usually evasion on top of that", chatMessage: "Against Phantom Lancer purchase items that are dealing AOE damage, preferably magical damage", audience: [ALL]},
    {category: "EnemyHero", hero: "Phantom Lancer", audioFile: "heroes/Phantom Lancer_7_Mana drain", messageTimes: [(36*60+15), (56*60+15)], textMessage: "Phantom Lancer loves long fights as he's able to drain huge amounts of mana. Ideally, look to burst him and to finish the fights reasonably fast. If the fight prolongs, count on the fact that you will be running low on mana and it might be better to disengage", chatMessage: "Phantom Lancer loves long fights as he drains huge amounts of mana. Burst him and finish the fights rapidly", audience: [ALL]},

    // 74. Phoenix | 06.03.2021
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_1_Icarus dive", messageTime: (-60), textMessage: "Look to go on Phoenix when Icarus dive was used. It has long cd.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_2_Fire spirits", messageTime: (-50), textMessage: "Fire Spirits are Phoenix's main laning spell - Look to dodge them by moving chaotically.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_3_Sun ray", messageTime: (2*60), textMessage: "Phoenix's Sun Ray does a lot of damage against high HP heroes. Run away from it or make a sharp turn.", audience: [ALL]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_4_Supernova", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Against Phoenix's Supernova you need to decide very quickly if you want to fight or run away.", audience: [ALL]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_5_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Supernova or Sun Ray.", audience: [ALL]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_6_Antispell items", messageTime: (12*60), textMessage: "Spell immunity and magic resistance items are great against Phoenix's magical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Phoenix", audioFile: "heroes/Phoenix_7_Attack speed items", messageTime: (12*60+10), textMessage: "Attack speed items allow you to destroy the Supernova faster.", audience: [ALL]},

    // 75. Puck | 06.03.2021
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_1_Early pressure", messageTime: (-60), textMessage: "Puck has low armor and HP. Pressure her early on.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_2_Control runes", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Control power runes against Puck. She likes to bottle and gank with those.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_3_Dream coil", messageTime: (8*60), textMessage: "Fight back when Dream Coiled unless you think you can escape by breaking it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_4_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid fighting in choke spots and clumping up against Dream Coil.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_5_Catch items", messageTime: (12*60), textMessage: "Puck is hard to catch. Instant disables and silences are great against Puck.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_6_Antispell items", messageTime: (12*60+10), textMessage: "Spell immunity and magic resistance items are great against Puck's magical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_7_Splitpush", messageTime: (12*60+20), textMessage: "Puck is great at split-pushing. Consider getting Boots of Travel on a Core.", audience: [ALL]},
    {category: "EnemyHero", hero: "Puck", audioFile: "heroes/Puck_8_Aghanims scepter", messageTime: (25*60+10), textMessage: "Once Puck gets Aghanim's Scepter, Dream Coil pierces spell immunity and stuns for longer.", audience: [ALL]},

    // 76. Pudge | Earlier work
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_1_Runes", messageTime: -30, textMessage: "You can hook runes. Try to hook an enemy into your allies at the intial bounty rune.", audience: [ALL]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_2_BaseDamage", messageTime: 15, textMessage: "During the laning stage don't play only around the Hook, also use your hero's tankiness and high base damage.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_3_Hook1", messageTime: 45, textMessage: "Try to keep the creep equilibrium close to your tower, so you can hook your enemies under the tower.", audience: [ALL]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_4_Hook2", messageTime: 4*60+30, textMessage: "Meat Hook destroys creeps instantly, except for ancients. Protect your tower by hooking the catapult.", audience: [ALL]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_5_Heal", messageTime: 5*60+30, textMessage: "You can heal up signicantly by dismembering a high HP creep.", audience: [ALL]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_6_Smoke", messageTimes: [10*60, 15*60], textMessage: "Find a partner and use smokes to find pick-offs.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_7_SaveAlly", messageTime: 15*60, textMessage: "Blink Dagger and Aghanim's Shard combined allow you to save your allies instantly.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Pudge", audioFile: "ownHero/Pudge_8_Hook3", messageTime: 25*60, repeatTime: 10*60, textMessage: "Fight around vision so you can land your Hooks more easily.", audience: [ALL]},

    {category: "EnemyHero", hero: "Pudge", audioFile: "heroes/Pudge_1_Camp spots", messageTime: (-30), textMessage: "Be aware of Pudge's camp spots and place observer wards to cover those spots", audience: [ALL]},
    {category: "EnemyHero", hero: "Pudge", audioFile: "heroes/Pudge_2_Towers", messageTime: (30), textMessage: "Be careful when playing close to enemy towers because a simple hook with tower damage can easily get you killed", chatMessage: "Be careful when playing close to enemy towers because a hook with tower damage can easily get you killed", audience: [ALL]},
    {category: "EnemyHero", hero: "Pudge", audioFile: "heroes/Pudge_3_Phyiscal damage", messageTime: (2*60), textMessage: "Physical damage is strong against Pudge as he has low armor", audience: [ALL]},
    {category: "EnemyHero", hero: "Pudge", audioFile: "heroes/Pudge_4_Anti-magic damage", messageTime: (3*60), textMessage: "Anti-magic damage items are good against pudge", audience: [ALL]},
    {category: "EnemyHero", hero: "Pudge", audioFile: "heroes/Pudge_5_Armor reduction", messageTime: (6*60+30), textMessage: "Armor reducing items are great for bursting Pudge", audience: [ALL]},

    // 77. Pugna | 06.03.2021
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_1_Nether blast", messageTime: (-60), textMessage: "Pugna's Nether Blast takes one second to explode. You can dodge it by moving away.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_2_Nether ward", messageTime: (30), textMessage: "Be careful not to use high mana cost spells around Pugna's Nether Ward.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_3_Life drain", messageTime: (8*60), textMessage: "Look to interrupt Pugna's Life Drain by running away or by stunning or silencing him.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_4_Tower defense", messageTimes: [(10*60+10), (15*60+10), (20*60+10)], textMessage: "Pugna takes buildings down fast with Nether Blast. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_5_Antispell items", messageTime: (12*60), textMessage: "Spell immunity and magic resistance items are great against Pugna's magical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Pugna", audioFile: "heroes/Pugna_6_Lotus orb", messageTime: (12*60+10), textMessage: "A well timed Lotus Orb is great at countering Pugna's Decrepify and Life Drain combo.", audience: [ALL]},

    // 78. Queen of Pain | 06.03.2021
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_1_Shadow strike", messageTime: (-60), textMessage: "Queen of Pain's Shadow Strike is a great harassing spell. Buy extra consumables.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_2_Blink", messageTime: (30), textMessage: "Look to play aggressively on Queen of Pain once her Blink is on cd. She's very squishy.", audience: [ALL]},
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_3_Control runes", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Control power runes against Queen of Pain. She likes to bottle and gank with those.", audience: [ALL]},
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_4_Orchid malevolence", messageTime: (10*60+10), textMessage: "Be aware of Queen of Pain's Orchid Malevolence timing. She can solo kill most of the heroes with it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_5_Clump up", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Avoid fighting in choke spots and clumping up against Queen of Pain's Sonic Wave.", audience: [ALL]},
    {category: "EnemyHero", hero: "Queen of Pain", audioFile: "heroes/Queen of Pain_6_Antispell items", messageTime: (12*60), textMessage: "Spell immunity and magic resistance items are quite good against Queen of Pain.", audience: [ALL]},

    // 79. Razor | 06.03.2021
    {category: "EnemyHero", hero: "Razor", audioFile: "heroes/Razor_1_Wins melee", messageTime: (-60), textMessage: "Razor wins most lanes against melee heroes. Consider sending ranged heroes against him.", audience: [ALL]},
    {category: "EnemyHero", hero: "Razor", audioFile: "heroes/Razor_2_Movement speed", messageTime: (-50), textMessage: "Getting movement speed items helps a lot at dealing with Razor's Static Link.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Razor", audioFile: "heroes/Razor_3_Keep distance", messageTime: (-40), textMessage: "Keep a good distance to Razor and make it hard for him to get a good Static Link off.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Razor", audioFile: "heroes/Razor_4_Prevent drain", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Prevent Razor from draining your core's damage. That way Razor will have less impact in fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Razor", audioFile: "heroes/Razor_5_Counter items", messageTime: (12*60), textMessage: "Force Staff, Hurricane Pike, Linken's Sphere and Lotus Orb are great at dealing with Static Link.", audience: [ALL]},

    // 80. Riki | 06.03.2021
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_1_Dust of appearance", messageTime: (8*60), textMessage: "Dust of Appearance doesn't reveal Riki while he's using Tricks of the Trade.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_2_Detection", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "Against Riki, carry detection on multiple heroes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_3_Observer sentry", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Pair Observer Wards and Sentries on the map to track Riki's movements.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_4_Protect supports", messageTimes: [(10*60+30), (20*60+30), (30*60+30)], textMessage: "Protect your supports from being killed by Riki.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_5_Stuns and roots", messageTime: (12*60), textMessage: "Items and spells with stuns and roots are great against Riki's mobility spells.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_6_Force staff", messageTime: (12*60+10), textMessage: "Force Staff and Hurricane Pike, allow you to move out of Riki's Smoke Screen.", audience: [ALL]},
    {category: "EnemyHero", hero: "Riki", audioFile: "heroes/Riki_7_Break", messageTime: (12*60+20), textMessage: "Break effects disable Cloak and Dagger and prevent Riki from being invisible.", audience: [ALL]},

    // 81. Rubick | Earlier work
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_1_Bad picks", messageTime: (-90), textMessage: "Avoid picking heroes with huge ultimates against Rubick such as Enigma, Magnus and Tidehunter", audience: [ALL]},
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_2_Fade bolt", messageTime: (-10), textMessage: "Avoid trading hits with Rubick while under effect of Fade Bolt as your attack damage is reduced", audience: [ALL]},
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_3_Force staff", messageTime: (5*60+45), textMessage: "Rubick's Telekinesis can be broken by using Force Staff on affected ally", audience: [ALL]},
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_4_Spell usage", messageTimes: [(8*60+45), (18*60+45)], textMessage: "Be mindful about spell usage so that you don't give away good spells to Rubick. Rubick is generally looking for stunning and high damage abilities", chatMessage: "Be mindful about spell usage so that you don't give away good spells to Rubick", audience: [ALL]},
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_5_Lotus orb", messageTimes: [(10*60+30), (20*60+30)], textMessage: "Lotus Orb is an effective item against Rubick as both of his damage spells are targetable", audience: [ALL]},
    {category: "EnemyHero", hero: "Rubick", audioFile: "heroes/Rubick_6_Team fights", messageTimes: [(15*60+30), (25*60+30), (35*60+30), (45*60+30)], textMessage: "Look to target Rubick in fights as he is a very squishy hero. If you manage to kill him you don't have to worry about spellcasting anymore", chatMessage: "Target Rubick in fights as he is squishy and you won't have to worry about spellcasting anymore", audience: [ALL]},

    // 82. Sand King | 06.03.2021
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_1_Sentry", messageTime: (-60), textMessage: "Bring a sentry to the lane against Sand King's Sand Storm.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_2_Caustic finale", messageTime: (-50), textMessage: "Your creeps explode on death due to Sand King's Caustic Finale. Denying affected creeps prevents explosion.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_3_Sand storm", messageTime: (-40), textMessage: "Avoid fighting in Sand Storm for too long as it does a lot of magical damage.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_4_Detection", messageTimes: [(10*60+10), (18*60+10), (26*60+10)], textMessage: "Against Sand King you need to carry detection on multiple heroes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_5_Stuns and roots", messageTime: (10*60+20), textMessage: "Be aware of Sand King's Blink Dagger timing. Look to cancel his Dagger in fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_6_Clump up", messageTimes: [(10*60+30), (20*60+30), (30*60+30)], textMessage: "Avoid fighting in choke spots and clumping up against Sand King's Epicenter and Blink Dagger combination.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sand King", audioFile: "heroes/Sand King_7_Antispell items", messageTime: (12*60), textMessage: "Spell immunity and magic resistance items are great against Sand King's magical damage.", audience: [ALL]},

    // 83. Shadow Demon | 07.03.2021
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_1_Magic stick wand", messageTime: (-60), textMessage: "Shadow Demon uses Shadow Poison frequently to harass. Magic Stick and Wand will be charged up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_2_Shadow poison", messageTime: (-50), textMessage: "If you have 3 stacks of Shadow Poison back up a bit and don't let yourself get hit by it again.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_3_Demonic purge dispel", messageTime: (8*60), textMessage: "Shadow Demon's Demonic Purge applies continuous dispel and removes positive buffs from spells and items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_4_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Shadow Demon in the fights as he provides saves and control for his team.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_5_Demonic purge bkb", messageTime: (12*60), textMessage: "Demonic Purge slows and damages through spell immunity. Be Careful not to waste Black King Bar on it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_6_Avoid items", messageTime: (12*60+10), textMessage: "Avoid buying Radiance and Assault Cuirass against Disruption as it will replicate these items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_7_Counter items", messageTime: (12*60+20), textMessage: "Status resistance items, Linken's Sphere and a well timed Lotus Orb are great against Shadow Demon.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Demon", audioFile: "heroes/Shadow Demon_8_Aghanims scepter", messageTime: (20*60), textMessage: "Once Shadow Demon gets Aghanim's Scepter he's able to break passive spells with Demonic Purge.", audience: [ALL]},

    // 84. Shadow Fiend | Earlier work
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_1_Laning", messageTime: (20), textMessage: "Shadow Fiend has low starting damage and he relies on gathering souls through last hits. If you do well against him on the first few waves you are likely to win the match up", chatMessage: "Shadow Fiend has low starting damage and he relies on gathering souls through last hits", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_2_Gank", messageTime: (4*60+10), textMessage: "Shadow Fiend doesn't have an escape mechanism, so look to gank him during the laning stage. If left unchallenged, he's one of the best farming heroes", chatMessage: "Shadow Fiend doesn't have an escape mechanism, so look to gank him during the laning stage", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_3_Attack", messageTime: (8*60+30), textMessage: "Try not to run at Shadow Fiend in plain sight as you might get triple razed to death", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_4_Item build", messageTime: (10*60+30), textMessage: "Shadow Fiend's first big item is either Eul's Scepter or Shadow Blade. Both items are good at picking off heroes, so keep an eye on his item build", chatMessage: "Shadow Fiend's first big item is either Eul's Scepter or Shadow Blade. Both are good at killing heroes", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_5_Team fight 1", messageTimes: [(15*60+30), (35*60+30), (55*60+30)], textMessage: "In team-fights, look to play around Shadow Fiend's ultimate by either canceling it or moving away from him", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_6_Armor", messageTime: (18*60+30), textMessage: "Armor items are good against Shadow Fiend as his Presence of the Dark Lord is an armor reducing aura", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Fiend", audioFile: "heroes/Shadow Fiend_7_Team fight 2", messageTimes: [(25*60+30), (45*60+30), (65*60+30)], textMessage: "Shadow Fiend should be a high priority target in team fights. If left unchecked, he can do tons of damage. At the same time, he's not that tanky and easy to bring down", chatMessage: "Shadow Fiend should be a high priority target in team fights. He does tons of damage and is squishy", audience: [ALL]},

    // 85. Shadow Shaman | 07.03.2021
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_1_RightClick", messageTime: -30, textMessage: "Make use of Shadow Shaman's high base damage to secure last hits and denies.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_2_Combo", messageTime: 6*60, textMessage: "A good Combo is to use Hex followed by Mass Serpent Ward with Shackles.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_3_Ultimate", messageTime: 6*60+30, textMessage: "You can pull nearby neutral or lane creeps to your Mass Serpent Wards after you made a move to get some extra gold.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_4_Ultimate2", messageTime: 8*60, textMessage: "If opponents are farming your Mass Serpent Wards, try to deny individual Serpent Wards with other Serpent Wards.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_5_Range", messageTime: 10*60, textMessage: "Take your time to farm up Aether Lens or Blink Dagger, so that you can cast you spells more easily in fights.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_6_Disables", messageTime: 14*60, textMessage: "Initiate on enemies with your long lasting disables, so your allies can follow-up for a kill.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_7_BKB", messageTime: 20*60, repeatTime: 20*60, textMessage: "In certain games, Black King Bar can be great to get off full Shackles durations.", audience: [ALL]},
    {category: "OwnHero", hero: "Shadow Shaman", audioFile: "ownHero/Shadow Shaman_8_Items", messageTime: 30*60, repeatTime: 20*60, textMessage: "Aghanim's Scepter and a Refresher Orb in late game, allow you to breach high ground and end the game.", audience: [ALL]},

    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_1_Avoid trading", messageTime: (-60), textMessage: "Shadow Shaman has high base damage and a great nuke in Ether Shock. Avoid trading with him.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_2_Disabling spells", messageTime: (30), textMessage: "Shadow Shaman has long lasting but short cast range disables. Keep distance from him.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_3_Mass serpent ward", messageTime: (8*60), textMessage: "Shadow Shaman has high solo kill potential on level 6 with Mass Serpent Ward.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_4_Tower defense", messageTimes: [(8*60+10), (18*60+10), (28*60+10)], textMessage: "Shadow Shaman takes buildings down fast with Mass Serpent Ward. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_5_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Shadow Shaman in the fights as he provides a lot of control for his team.", audience: [ALL]},
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_6_Counter items", messageTime: (12*60), textMessage: "Black King Bar, status resistance items, Linken's Sphere and Lotus Orb are great against Shadow Shaman.", audience: [ALL]},
    /*{category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_7_Crimson guard", messageTime: (12*60+10), textMessage: "Crimson Guard is great at reducing damage on buildings and heroes by Mass Serpent Ward.", audience: [ALL]}, 12.6.2021 no longer valid */
    {category: "EnemyHero", hero: "Shadow Shaman", audioFile: "heroes/Shadow Shaman_8_Ratting", messageTime: (25*60), textMessage: "Shadow Shaman is good at ratting your base especially with Aghanim's Scepter and Refresher Orb.", audience: [ALL]},

    // 86. Silencer | 07.03.2021
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_1_ArcaneCurse", messageTime: 30, textMessage: "Use Arcane Curse when you expect opponents to cast a spell.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_2_GlaivesOfWisdom", messageTime: 60, textMessage: "Clicking Glaives of Wisdom on an enemy hero doesn't draw creep aggro.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_3_Intelligence", messageTime: -20, textMessage: "To steal intelligence from a dying hero you have to have Glaives of Wisdom skilled and be within 925 of dying hero or be the one who scores the kill.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_4_Combo", messageTime: 90, textMessage: "Combining Arcane Curse with Last Word does a lot of damage.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_5_Minimap", messageTime: 8*60, repeatTime: 20*60, textMessage: "Be aware of what happens on the map, so you can use Global Silence when needed.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_6_GlobalSilence1", messageTime: 12*60, repeatTime: 20*60, textMessage: "Using Global Silence defensively is fine, but ideally use it during fights. Make moves when it is off cooldown.", audience: [ALL]},
    {category: "OwnHero", hero: "Silencer", audioFile: "ownHero/Silencer_7_GlobalSilence2", messageTime: 20*60, repeatTime: 20*60, textMessage: "Many items dispel Global Silence. Be patient and don't waste it at the start of a fight.", audience: [ALL]},

    {category: "EnemyHero", hero: "Silencer", audioFile: "heroes/Silencer_1_Glaives of wisdom", messageTime: (-60), textMessage: "Glaives of Wisdom are great for harassing as Silencer doesn't pull aggro and the damage ramps up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Silencer", audioFile: "heroes/Silencer_2_Arcane curse", messageTime: (-50), textMessage: "Silencer's Arcane Curse gets extended every time you cast a spell while under the effect of it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Silencer", audioFile: "heroes/Silencer_3_Global Silence", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Global Silence has a long cooldown. Look to fight after it was used.", audience: [ALL]},
    {category: "EnemyHero", hero: "Silencer", audioFile: "heroes/Silencer_4_Dispel items", messageTime: (12*60), textMessage: "Items that provide dispel are great against Silencer's silences.", audience: [ALL]},

    // 87. Skywrath Mage | 07.03.2021
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_1_Magic stick wand", messageTime: (-60), textMessage: "Skywrath Mage uses his spells frequently to harass. Magic Stick and Wand will be charged up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_2_Infused raindrops", messageTime: (3*60+30), textMessage: "Consider purchasing Infused Raindrops against Skywrath Mage's damaging spells.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_3_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Skywrath Mage in fights as he does a lot of damage but is very squishy.", audience: [ALL]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_4_Rod of atos", messageTime: (10*60+20), textMessage: "Be aware of Rod of Atos timing on Skywrath Mage. He can solo kill most of the heroes with it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_5_Force staff", messageTime: (12*60), textMessage: "Force Staff is great at saving an ally from Skywrath's Mystic Flare.", audience: [ALL]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_6_Antispell items", messageTime: (12*60+10), textMessage: "Magic resistance and spell immunity items are great against Skywrath Mage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Skywrath Mage", audioFile: "heroes/Skywrath Mage_7_Dispel items", messageTime: (12*60+20), textMessage: "Items that provide dispel are great against Skywrath's Ancient Seal and root from Rod of Atos.", audience: [ALL]},

    // 88. Slardar | 07.03.2021
    {category: "EnemyHero", hero: "Slardar", audioFile: "heroes/Slardar_1_Bash of the deep", messageTime: (-60), textMessage: "After every 3rd hit, Slardar will have Bash of the Deep charged up. Keep yourself at distance.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Slardar", audioFile: "heroes/Slardar_2_Blink dagger", messageTime: (10*60+10), textMessage: "Be aware of Slardar's Blink Dagger timing. Look to cancel his Dagger in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Slardar", audioFile: "heroes/Slardar_3_Dispel items", messageTime: (12*60), textMessage: "Items that provide dispel are great against Slardar's Corrosive Haze.", audience: [ALL]},
    {category: "EnemyHero", hero: "Slardar", audioFile: "heroes/Slardar_4_Armor items", messageTime: (12*60+10), textMessage: "Armor items are great against Slardar's damage output and armor reduction.", audience: [ALL]},
    {category: "EnemyHero", hero: "Slardar", audioFile: "heroes/Slardar_5_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Slardar lineups are able to take Roshan early on. Ward around Roshpit and check.", audience: [ALL]},

    // 89. Slark | Earlier work
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_1_Offlane melee", messageTime: (-60-15), textMessage: "Slark tends to do well against offlane melee due to Essence Shift stacks. Check if you can send at least one ranged hero against him", chatMessage: "Slark tends to do well against offlane melee due to Essence Shift stacks. Send one ranged hero against him", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_2_Wards", messageTimes: [(4*60+45), (10*60+45)], textMessage: "Place wards in unusual spots and more defensively as Slark is able to sense vision with his ultimate", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_3_Dark pact", messageTime: (6*60+30), textMessage: "Keep an eye on Slark's Dark Pact usage so that your spells and items don't get dispelled", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_4_Force staff", messageTime: (8*60+30), textMessage: "Force Staff allows you to break away from Slark's Pounce", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_5_Night vision", messageTime: (9*60+30), textMessage: "Slark has increased night vision so he's likely to spot you before you spot him. Use Smoke of Deceit to gank him more effectively during night", chatMessage: "Slark has increased night vision so use Smoke of Deceit to gank him more effectively during night", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_6_Essence shift", messageTimes: [(15*60+30), (30*60+30)], textMessage: "Long fights are favoring Slark as he is able to acquire Essence Shift stacks. Keep an eye on it and avoid fighting him if his stacks are high", chatMessage: "Long fights are favoring Slark as he acquires Essence Shift stacks. Avoid fighting him when stacks are high", audience: [ALL]},
    {category: "EnemyHero", hero: "Slark", audioFile: "heroes/Slark_7_Counter items", messageTime: (20*60+30), textMessage: "Instant or near instant disables and burst damage are good at dealing with Slark", audience: [ALL]},

    // 90. Snapfire | Earlier work
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_1_ Scatterblast", messageTime: (-10), textMessage: "Avoid staying too close to Snapfire on the lane as her main harassing spell is Scatterblast which does 50% more damage if you are within 450 range", chatMessage: "Avoid staying close to Snapfire as her Scatterblast which does 50% more damage if you are within 450 range", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_2_Firesnap cookie", messageTime: (50), textMessage: "Firesnap Cookie stun can be dodged if you run quickly towards the hero or creep that cookie was used on", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_3_Lil' Shredder", messageTime: (6*60+30), textMessage: "Be careful with spells that have hit counter as they are countered by Snapfire's Lil' Shredder", audience: [ALL]},
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_4_Mortimer kisses 1", messageTimes: [(8*60+45), (28*60+45), (48*60+45)], textMessage: "To dodge Snapfire's Mortimer Kisses, make sharp turns and change direction", audience: [ALL]},
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_5_Magic damage", messageTimes: [(18*60+45), (38*60+45)], textMessage: "Snapfire's damage is primarily magical, getting magic resistance items or Black King Bar allows you to negate most of her impact in fights", chatMessage: "Snapfire's damage is primarily magical. Magic resistance items or Black King Bar is good", audience: [ALL]},
    {category: "EnemyHero", hero: "Snapfire", audioFile: "heroes/Snapfire_6_Mortimer kisses 2", messageTimes: [(23*60+0), (33*60+0), (53*60+0)], textMessage: "Canceling Snapfire's ultimate can be a fight winning move. Try to position yourself such that you can get to her as quickly as possible. Getting gap closing items helps as well", chatMessage: "Canceling Snapfire's ultimate can be a fight winning move. Getting gap closing items helps", audience: [ALL]},

    // 91. Sniper | Earlier work
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_1_Minimap", messageTime: -30, textMessage: "Sniper gets easily ganked, always have an Observer Ward placed and pay attention to the minimap.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_2_Shrapnel1", messageTimes: [1*60+45, 3*60+45, 5*60+45, 7*60+45, 9*60+45], textMessage: "Push out the lane with Shrapnel prior to rune spawns.", audience: [ROLE_MID]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_3_Stack", messageTime: 2*60+45, textMessage: "Stack a small camp whenever you can.", audience: [ROLE_MID]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_4_Push", messageTime: 5*60+30, textMessage: "Sniper doesn't like to rotate too much, so focus on farming and pressure the tower if opponents' mid rotates.", audience: [ROLE_MID]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_5_TeamFight", messageTime: 10*60, repeatTime: 10*60, textMessage: "Don't let opponents see you at the start of a fight. Let them focus on someone else.", audience: [ALL]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_6_Shrapnel2", messageTime: 10*60+30, repeatTime: 10*60, textMessage: "If you feel you might be ganked, Shrapnel the wave and move out.", audience: [ALL]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_7_Shrapnel3", messageTime: 11*60, repeatTime: 10*60, textMessage: "Sniper is really strong at defending buildings with Shrapnel and his long attack range.", audience: [ALL]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_9_Take_Aim", messageTime: 11*60+30, repeatTime: 10*60, textMessage: "When in trouble, often times the correct play is to press Take Aim and stand your ground.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Sniper", audioFile: "ownHero/Sniper_8_Aghanims", messageTimes: [15*60, 20*60], textMessage: "Aghanim's Scepter and Aghanim's Shard are Core items. Take your time in between the fights to farm them.", audience: [ROLE_SUPPORT]},

    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_1_Gank", messageTimes: [(1*60+30), (4*60+30)], textMessage: "Gank Sniper in early game. He doesn't have any escape mechanism and is very squishy", audience: [ALL]},
    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_2_Gap-closing", messageTimes: [(7*60+10), (15*60+20), (25*60+25)], textMessage: "Buy gap-closing items against Sniper", audience: [ALL]},
    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_3_Smoke assassinate", messageTime: (8*60+30), textMessage: "Smoke of Deceit can be used to dodge Sniper's Assassinate ability", audience: [ALL]},
    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_4_Smoke attack", messageTimes: [(10*60+15), (20*60+15), (30*60+15)], textMessage: "Use Smoke of Deceit to wrap around and catch Sniper off-guard", audience: [ALL]},
    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_5_Deep wards", messageTimes: [(11*60+15), (23*60+15), (33*60+15)], textMessage: "Deep observer wards allow you to spot Sniper on the backlines", audience: [ALL]},
    {category: "EnemyHero", hero: "Sniper", audioFile: "heroes/Sniper_6_High-ground", messageTimes: [(23*60+10), (32*60+10), (41*60+10)], textMessage: "Be very careful when pushing high-ground against Sniper. Chip the tower and racks patiently and don't overextend. You might also want to give up on the high-ground siege and take a fight outside of their base", chatMessage: "Be careful when pushing high-ground against Sniper. Chip the tower and racks patiently and don't overextend", audience: [ALL]},

    // 92. Spectre | 07.03.2021
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_1_Pressure early", messageTime: (-60), textMessage: "Spectre is a weak laner. Look to pressure her early on. She's slow at recovering.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_2_Desolate", messageTime: (30), textMessage: "Spectre's Desolate does no damage to you, if you are close to an allied unit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_3_Focus", messageTime: (40), textMessage: "The closer you are to Spectre the more damage you take from Dispersion.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_4_Protect supports", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Protect your supports from being killed during the Spectre's Haunt.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_5_Haunt cd", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Spectre's Haunt has a long cooldown. Look to fight after it was used.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spectre", audioFile: "heroes/Spectre_6_Break", messageTime: (12*60), textMessage: "Break effects remove Desolate and Dispersion and make Spectre much weaker.", audience: [ALL]},

    // 93. Spirit Breaker | 07.03.2021
    {category: "EnemyHero", hero: "Spirit Breaker", audioFile: "heroes/Spirit Breaker_1_Charge of darkness", messageTime: (-60), textMessage: "Charge of Darkness provides vision over you. Hiding in trees won't help once you're charged.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spirit Breaker", audioFile: "heroes/Spirit Breaker_2_Bulldoze", messageTime: (30), textMessage: "Avoid wasting disables on Spirit Breaker buffed by Bulldoze.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spirit Breaker", audioFile: "heroes/Spirit Breaker_3_Roam", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Spirit Breaker roams a lot. Keep track of his movements and have a teleport ready.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spirit Breaker", audioFile: "heroes/Spirit Breaker_4_Counter charge items", messageTime: (12*60), textMessage: "Spells and items that provide instant disable are great at stopping Charge of Darkness.", audience: [ALL]},
    {category: "EnemyHero", hero: "Spirit Breaker", audioFile: "heroes/Spirit Breaker_5_Linkens sphere", messageTime: (12*60+10), textMessage: "Linken's Sphere is great against Charge of Darkness.", audience: [ALL]},

    // 94. Storm Spirit | 07.03.2021
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_1_Rune control", messageTimes: [5*60+45, 15*60+45, 25*60+45], textMessage: "Rune control is very important. Arcane and Regeneration runes can easily win you the fight or allow you to get a pick-off.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_2_Stack", messageTime: 2*60+45, textMessage: "Stack small camp and clear it after addressing lane creeps. It is very important to hit level 6 as soon as possible to make yourself less gankable.", audience: [ROLE_MID]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_3_Rush Orchid", messageTime: 5*60+30, textMessage: "If you have a really good start, get Orchid as soon as possible. It will allow you to pick-off most of the heroes on the map.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_4_Ball Lightning 1", messageTime: 6*60+45, textMessage: "You can right-click and use spells and items during Ball Lightning, including teleport.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_5_Mana management", messageTime: 8*60, repeatTime: 15*60, textMessage: "Mana management is the key. The more mana you have the more damage you can do. Be full mana if you expect fight to break out.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_6_Preserve mana", messageTime: 9*60, repeatTime: 15*60, textMessage: "Don't spend all of your mana on initial jump. Preserve some to be able to disengage.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_7_Leaving fountain", messageTime: 11*60, repeatTime: 15*60, textMessage: "When leaving the fountain, you can Ball Lightning up to t3 tower while bottling and you will still be full mana.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_8_Jump backliners", messageTime: 12*60, repeatTime: 15*60, textMessage: "Target backliners. They are squishy and Storm has no issue gap-closing.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_8_Static Remnant", messageTime: 13*60, repeatTime: 15*60, textMessage: "Static Remnant provides flying vision around itself which can be useful to scout Roshan or rune spawn and give you vision in tree lines.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_9_Ball Lightning 2", messageTime: 14*60, repeatTime: 20*60, textMessage: "Ball Lightning destroys trees in its path.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_10_Aegis Cheese", messageTime: 18*60, repeatTime: 15*60, textMessage: "Storm Spirit is one of the best Aegis/Cheese carriers as he utilizes the mana he gets back really well.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_11_Aghanims Scepter", messageTime: 24*60, repeatTime: 10*60, textMessage: "Level 20 Vortex talent along with Aghanim's Scepter mimics Reverse Polarity but on 16s cooldown.", audience: [ALL]},
    {category: "OwnHero", hero: "Storm Spirit", audioFile: "ownHero/Storm Spirit_12_Stop push", messageTime: 33*60, repeatTime: 10*60, textMessage: "In late game you can fly over and kill the creeps that opponents are looking to push with.", audience: [ALL]},
    
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_1_Magic stick wand", messageTime: (-60), textMessage: "Storm Spirit uses Static Remnant frequently. Magic Stick and Wand will be charged up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_2_Control runes", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Control power runes against Storm. He likes to bottle and gank with those.", audience: [ALL]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_3_Low mana", messageTime: (5*60+30), textMessage: "Look to fight when Storm Spirit is low on mana as he won't be able to use Ball Lightning much.", audience: [ALL]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_4_Orchid malevolence", messageTime: (10*60+10), textMessage: "Be aware of Storm Spirit's Orchid timing. He can solo kill most heroes with it.", audience: [ALL]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_5_Counter items", messageTime: (12*60), textMessage: "Spells and items that provide instant disables and silences are great against Storm Spirit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_6_Antispell items", messageTime: (12*60+10), textMessage: "Magic resistance and spell immunity items are great against Storm Spirit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Storm Spirit", audioFile: "heroes/Storm Spirit_7_Highground", messageTimes: [(20*60+10), (30*60+10), (40*60+10)], textMessage: "Be quick on glyphing or piping the creepwave when pushing highground against Storm's Ball Lightning. ", audience: [ALL]},

    // 95. Sven | 08.03.2021
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_1_Great cleave", messageTime: (-60), textMessage: "Against Sven, avoid playing inside the creep wave as you will take damage from Great Cleave.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_2_Contest farm", messageTime: (10*60+10), textMessage: "Sven farms quickly with Great Cleave. Smoke him, place deep wards and sentry off camps.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_3_Gods Strength", messageTimes: [(12*60), (22*60), (32*60)], textMessage: "God's Strength more than doubles Sven's damage. Look to disengage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_4_Clump up", messageTimes: [(12*60+10), (22*60+10), (32*60+10)], textMessage: "Avoid clumping up in the fights for Storm Hammer and Great Cleave.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_5_Armor items", messageTime: (12*60+20), textMessage: "Armor items are great against Sven's insane physical damage output.", audience: [ALL]},
    {category: "EnemyHero", hero: "Sven", audioFile: "heroes/Sven_6_Aghanims scepter", messageTime: (15*60), textMessage: "Be aware of Sven's Aghanim's Scepter timing. He becomes much more dangerous.", audience: [ALL]},

    // 96. Techies | 08.03.2021
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_1_Extra consumables", messageTime: (-60), textMessage: "Against Techies, deliver extra consumables and an Observer Ward to keep track of him.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_2_Quell", messageTime: (-50), textMessage: "Quell the trees in the area so you can spot Proximity mines and see Techies doing Blast Off!", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_3_Proximity mines", messageTime: (-40), textMessage: "Proximity Mines explode 1.6 seconds after you hear the beep. Destroy them or move away quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_4_Keep track", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Keep track of Techies' movements and notice which part of the map is being mined.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_5_Bring sentries", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Bring sentries whenever you're making a move on the opponent side of the map.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_6_Avoid trees", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Avoid being next to trees in the lane as he can hide the Remote Mines in there.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_7_Vision", messageTimes: [(10*60+30), (20*60+30), (30*60+30)], textMessage: "Avoid walking up highground or in Roshpit without vision. You might run into mines.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_8_Antispell items", messageTime: (12*60), textMessage: "Magic resistance items, Black King Bar and Aeon Disk are great against Techies' Remote Mines.", audience: [ALL]},
    // {category: "EnemyHero", hero: "Techie", audioFile: "heroes/Techie_9_Necrobook 3", messageTime: (12*60+10), textMessage: "Consider buying Necrobook level3 on someone for true sight.", audience: [ALL]}, |patch 7.29| MESSAGE REMOVED
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_10_Aegis", messageTimes: [(15*60+10), (25*60+10), (35*60+10)], textMessage: "Getting Aegis of Immortal is great against Remote mines. Take Roshan as early as possible.", audience: [ALL]},
    {category: "EnemyHero", hero: "Techies", audioFile: "heroes/Techies_11_Gem", messageTime: (20*60+10), textMessage: "Buy a Gem of True Sight around 20min when you start grouping up as team.", audience: [ALL]},

    // 97. Templar Assassin | 08.03.2021
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_1_Refraction", messageTime: (-60), textMessage: "Damage over time spells and items are great at removing Templar's Refraction charges.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_2_Psi blade", messageTime: (-50), textMessage: "To dodge Templar's Psi Blade, play on your hero's max range and on the same side of the lane as Templar.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_3_Psionic trap", messageTime: (5*60+10), textMessage: "Make sure to have sentry on the lane against Templar's Psionic Trap.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_4_Contest ancients", messageTime: (10*60+10), textMessage: "Templar Assassin tends to stack and farm ancients early on. Block the camp or contest her.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_5_Carry detection", messageTimes: [(10*60+20), (18*60+20), (26*60+20)], textMessage: "Carry detection on multiple heroes against Templar.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_6_Tower defense", messageTimes: [(12*60), (22*60), (32*60) ], textMessage: "Templar Assassin takes down buildings fast with Desolator. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_7_Counter items", messageTime: (12*60+10), textMessage: "Armor items, Ghost Scepter and Heaven's Halberd are great against Templar Assassin.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_8_Desolator blink", messageTime: (12*60+20), textMessage: "Be aware of Templar Assassin's Desolator and Blink Dagger timing. She can solo kill most heroes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_9_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Templar Assassin is able to take Roshan early on. Ward and check Roshan.", audience: [ALL]},
    {category: "EnemyHero", hero: "Templar Assassin", audioFile: "heroes/Templar Assassin_10_Rospit psionic trap", messageTimes: [(15*60+20), (25*60+20), (35*60+20)], textMessage: "Check the Roshpit for Psionic Trap before taking Roshan.", audience: [ALL]},

    // 98. Terrorblade | 08.03.2021
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_1_Pressure early", messageTime: (-60), textMessage: "Terrorblade has high armor, but low HP and is weak against magical damage. Pressure him early on.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_2_Metamorphosis", messageTimes: [(-50), (15*60+10), (25*60+10)], textMessage: "Terrorblade is strong when he has Metamorphosis on. Look to escape and fight afterwards.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_3_Conjure image", messageTime: (-40), textMessage: "Hexes, drains and Dagon are destroying Conjur Images instantly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_4_Sunder", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "If you are high on HP, avoid staying close to Terrorblade when he is low as he will Sunder you.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_5_Contest farm", messageTime: (10*60+10), textMessage: "Terrorblade farms quickly with Conjure Image. Smoke on him, place deep wards and sentry off camps.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_6_Antiillusion items", messageTime: (12*60), textMessage: "Items that provide AoE damage, especially magical damage, are great at dealing with Conjure Image.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_7_Crimson guard", messageTime: (12*60+10), textMessage: "Crimson Guard and armor items are great against Terrorblade's physical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_8_Antisunder items", messageTime: (12*60+20), textMessage: "Black King Bar, Linken's sphere or a well timed Lotus Orb prevent you from being Sundered.", audience: [ALL]},
    {category: "EnemyHero", hero: "Terrorblade", audioFile: "heroes/Terrorblade_9_Boots of travel", messageTime: (12*60+30), textMessage: "Terrorblade is great at split-pushing and ratting. Consider getting Boots of Travel on a core.", audience: [ALL]},

    // 99. Tidehunter | 08.03.2021
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_1_Magic stick wand", messageTime: (-60), textMessage: "Tidehunter uses Anchor Smash frequently. Magic Stick and Wand will be charged up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_2_Anchor smash", messageTime: (-50), textMessage: "Avoid being hit by Anchor Smash as you'll have decreased damage for last hitting or to fight back.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_3_Kraken shell", messageTime: (30), textMessage: "Only use dispellable spells or items on Tidehunter at the start of a fight or after Kraken Shell has procced.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_4_Ravage", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Tidehunter's Ravage has a long cooldown. Look to fight when it is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_5_Blink dagger", messageTime: (12*60), textMessage: "Be aware of Tidehunter's Blink Dagger timing. Look to cancel it in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_6_Black king bar", messageTime: (12*60+10), textMessage: "Black King Bar will make you immune to Tidehunter's Ravage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tidehunter", audioFile: "heroes/Tidehunter_7_Break", messageTime: (12*60+20), textMessage: "Break effects are great at removing Kraken Shell which makes Tidehunter much weaker.", audience: [ALL]},

    // 100. Timbersaw | Earlier work
    {category: "EnemyHero", hero: "Timbersaw", audioFile: "heroes/Timbersaw_1_Spirit vessel", messageTime: (-60), textMessage: "One player should buy Spirit Vessel against Timbersaw's reactive armor", audience: [ALL]},
    {category: "EnemyHero", hero: "Timbersaw", audioFile: "heroes/Timbersaw_2_Reactive armor", messageTime: (30), textMessage: "Play agressively against Timbersaw before he reaches level 3, or only when his reactive armor stacks are low, otherwise avoid fighting him", chatMessage: "Play agressively against Timbersaw before he reaches level 3 or only when his reactive armor stacks are low", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Timbersaw", audioFile: "heroes/Timbersaw_3_Trees", messageTime: (1*60+30), textMessage: "Stay away from trees against Timbersaw", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Timbersaw", audioFile: "heroes/Timbersaw_4_Avoid lane", messageTime: (8*60), textMessage: "Timbersaw is strongest between 8 and 20 minutes, so avoid contesting him on the lane and try to pressure other lanes and heroes instead", chatMessage: "Timbersaw is strongest between 8 and 20 minutes, pressure other lanes and heroes", audience: [ALL]},
    {category: "EnemyHero", hero: "Timbersaw", audioFile: "heroes/Timbersaw_5_Silver edge", messageTime: (10*60), textMessage: "Buy Silver Edge against Timbersaw's reactive armor, if you need an additional item to deal with him", audience: [ALL]},

    // 101. Tinker | 08.03.2021   ***CHANGED 7.30***
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_1_Tranquil boots", messageTime: (-60), textMessage: "Tranquil Boots are great against Tinker as they don't break by his magical damage.", audience: [ALL]},
    // Added "midlane" in next textMessage as Tinker can be played as a support as well
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_2_Gank early", messageTime: (3*60+30), textMessage: "Look to gank midlane Tinker early on as he doesn't have an escape.", audience: [ALL]},
    /* {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_3_Contest farm", messageTime: (5*60+30), textMessage: "Tinker tends to make a lot of stacks in the jungle. Contest them or sentry off camps.", audience: [ALL]}, */

    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_12_Defense matrix", messageTime: (4*60+30), textMessage: "Avoid using long lasting disables and debuffs on a hero shielded with Defense Matrix due to its high status resistance.", chatMessage: "Avoid using long lasting disables and debuffs on hero shielded by Defense Matrix.", audience: [ALL]},

    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_4_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Tinker in fights as he's squishy but does insane amounts of damage.", audience: [ALL]},
    // Removed Boots of Travel from textMessage as Tinker doesn't need them anymore
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_5_Item timings", messageTime: (12*60), textMessage: "Be aware of Tinker's Blink Dagger timing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_6_Avoid trees", messageTime: (12*60+10), textMessage: "You can dodge Tinker's Heat-Seeking Missile by using Smoke of Deceit or blinking away.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_7_Antispell items", messageTime: (12*60+20), textMessage: "Magic resistance items, Black King Bar or a well timed Lotus Orb are great against Tinker.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_8_Gap closing items", messageTime: (12*60+30), textMessage: "Gap closing items are great at getting on top of Tinker.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_9_Boots of travel", messageTime: (12*60+40), textMessage: "Tinker is great at split-pushing. Consider getting Boots of Travel on a core.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_10_Tinker wards", messageTimes: [(15*60+10), (25*60), (35*60)], textMessage: "Place Tinker wards at the edges of the map. Consider camping those spots under the ward.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tinker", audioFile: "heroes/Tinker_11_Fight outside base", messageTimes: [(25*60+10), (35*60+10), (45*60+10)], textMessage: "It is really hard to push highground against Tinker. Be patient and take fights outside the base.", audience: [ALL]},

    // 102. Tiny | 08.03.2021
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_1_No armor", messageTime: (-60), textMessage: "Tiny starts with 0 armor. Harass him with physical damage as much as you can.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_2_Toss", messageTime: (-50), textMessage: "Toss is Tiny's main setup spell. Keep distance or play in creep wave to prevent easy Tosses.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_3_Toss under tower", messageTime: (-40), textMessage: "Avoid playing close to the opponent's tower as you can get Tossed underneath it by Tiny.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_4_Combo", messageTime: (3*60+30), textMessage: "Avalanche into Toss combo does a lot of magical damage. Get Infused Raindrops or a Cloak.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_5_Blink dagger", messageTime: (10*60+10), textMessage: "Be aware of Tiny's Blink Dagger timing. Cancel it in the fights.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_6_Magic resistance", messageTime: (12*60), textMessage: "Magic resistance items are great against Tiny's magical burst.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tiny", audioFile: "heroes/Tiny_7_Tower defense", messageTime: (12*60+10), textMessage: "Tiny takes down buildings fast with Tree Grab and Toss. Organize defense quickly.", audience: [ALL]},

    // 103. Treant Protector | 08.03.2021
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_1_Quell trees", messageTime: (-60), textMessage: "Quell trees in the lane so you can keep track of Treant Protector and stop Nature's Guise.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_2_Keep distance", messageTime: (-50), textMessage: "Keep distance from Treant Protector as he has the highest base damage in the game.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_3_Take towers", messageTimes: [(5*60+30), (15*60+30), (25*60+30)], textMessage: "Take towers down in one go so Treant Protector can't heal them with Living Armor.", audience: [ALL]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_4_Meteor Hammer", messageTime: (10*60+10), textMessage: "Be aware of Treant Protector's Meteor Hammer timing. He becomes good at splitpushing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_5_Invisible", messageTimes: [(12*60), (20*60), (30*60)], textMessage: "Treant Protector becomes invisible with his level10 talent. Carry detection on multiple heroes.", audience: [ALL]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_6_Observer sentry", messageTimes: [(12*60+10), (20*60+20), (28*60+10)], textMessage: "Observers and sentries at the edges of the map are great at stopping Treant from splitpushing.", audience: [ALL]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_7_Dispel items", messageTime: (12*60+20), textMessage: "Items that apply dispel on you, are great against Treant's Overgrowth and Leech Seed.", audience: [ALL]},
    {category: "EnemyHero", hero: "Treant Protector", audioFile: "heroes/Treant Protector_8_Aghanims scepter", messageTime: (20*60+10), textMessage: "Once Treant gets Aghanim's Scepter consider getting a Gem and cut Eyes in the Forest.", audience: [ALL]},

    // 104. Troll Warlord | 09.03.2021
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_1_Extra consumables", messageTime: (-60), textMessage: "Troll Warlord is a strong laner. Buy extra healing items.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_2_Battle trance kite", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Avoid Troll when Battle Trance is on. Don't allow him to heal by hitting you.", audience: [ALL]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_3_Battle trance dispel", messageTime: (9*60+10), textMessage: "Battle Trance applies basic dispel on Troll. Use dispellable spells and items afterwards.", audience: [ALL]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_4_Tower defense", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Troll Warlord takes down buildings fast with Fervor. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_5_Antievasion items", messageTime: (13*60), textMessage: "Items that pierce evasion are good against Troll's Whirling Axes (relevant for Melee heroes).", audience: [ALL]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_6_Roshan", messageTimes: [(15*60+10), (25*60), (35*60)], textMessage: "Troll Warlord is able to take Roshan early on. Ward and check Roshan.", audience: [ALL]},
    {category: "EnemyHero", hero: "Troll Warlord", audioFile: "heroes/Troll Warlord_7_Aghanims scepter", messageTime: (23*60), textMessage: "Aghanim's Scepter makes Troll's Whirling Axes apply basic dispel on him and opponents.", audience: [ALL]},

    // 105. Tusk | 09.03.2021
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_1_Movement speed items", messageTime: (-60), textMessage: "Movement speed items are great against Tusk's spells.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_2_Observer ward", messageTime: (-50), textMessage: "Bring an Observer Ward to lane to keep an eye on Tusk's aggressive movements.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_3_Tag team", messageTime: (-40), textMessage: "Keep distance from Tusk because Tag Team does extra damage on every hit.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_4_Roam", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Tusk roams a lot. Keep an eye on his movements and be ready to help.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_5_Blink dagger", messageTime: (12*60), textMessage: "Be aware of Tusk's Blink Dagger timing as he can easily save his allies with Snowball.", audience: [ALL]},
    {category: "EnemyHero", hero: "Tusk", audioFile: "heroes/Tusk_6_Fore staff", messageTime: (12*60+10), textMessage: "Force Staff and Hurricane Pike are great against Tusk.", audience: [ALL]},

    // 106. Underlord | 09.03.2021
    {category: "EnemyHero", hero: "Underlord", audioFile: "heroes/Underlord_1_Pressure early", messageTime: (-60), textMessage: "Pressure Underlord early on as he is slow and has no escape.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Underlord", audioFile: "heroes/Underlord_2_Extra consumables", messageTime: (30), textMessage: "Bring extra consumables to the lane against Underlord's Firestorm spam.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Underlord", audioFile: "heroes/Underlord_3_Deny ranged creeps", messageTime: (40), textMessage: "Denying range creeps is easy against Firestorm.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Underlord", audioFile: "heroes/Underlord_4_Tower siege", messageTime: (5*60+30), textMessage: "Underlord is really good at defending buildings. Respect that fact.", audience: [ALL]},
    {category: "EnemyHero", hero: "Underlord", audioFile: "heroes/Underlord_5_Clump up", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Avoid clumping up and fighting in choke spots against Firestorm and Pit of Malice combo.", audience: [ALL]},

    // 107. Undying | 09.03.2021
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_1_Magic stick wand", messageTime: (-60), textMessage: "Undying uses Decay frequently. Magic Stick and Wand will be charged up.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_2_Keep distance", messageTime: (-40), textMessage: "Keep distance from Undying as he is likely to have high damage due to Decay stacks.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_3_Soul Rip", messageTime: (30), textMessage: "Keep an eye on your total HP against Decay spam. Soul Rip can finish you off.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_4_Tombstone", messageTimes: [(5*60+20), (15*60+20), (25*60+20)], textMessage: "Focus Tombstone in fights or you risk being slowed greatly and take a lot of damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_5_Kill zombies", messageTime: (5*60+30), textMessage: "Consider killing off zombies chasing you or team mates in trouble.", audience: [ALL]},
    {category: "EnemyHero", hero: "Undying", audioFile: "heroes/Undying_6_Flesh golem", messageTime: (8*60), textMessage: "Avoid being hit by Undying in Flesh Golem form as you will take extra damage and be slowed.", audience: [ALL]},

    // 108. Ursa | 09.03.2021
    {category: "EnemyHero", hero: "Ursa", audioFile: "heroes/Ursa_1_Keep distance", messageTime: (-60), textMessage: "Keep distance from Ursa as he is able to build up damage against you with Fury Swipes.", audience: [IN_LANE]},
    // @Alex: This one is hard to understand: Does this mean the player has to use them on Ursa when he has enrange or not to use it then? (I recorded it anyway) ANSWER: Consider NOT to use them while Enrage is active as the disables will last short due to status resistance from Enrage. Sometimes it is fine to use them despite diminished effect. That's why I was using word "consider".
    {category: "EnemyHero", hero: "Ursa", audioFile: "heroes/Ursa_2_Save disables", messageTime: (8*60), textMessage: "Consider saving your disables against Ursa's Enrage status resistance increase.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ursa", audioFile: "heroes/Ursa_3_Euls", messageTime: (12*60), textMessage: "Eul's Scepter is great for kiting Enrage as it doesn't get affected by its status resistance.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ursa", audioFile: "heroes/Ursa_4_Counter items", messageTime: (12*60+10), textMessage: "Ghost Scepter, Force Staff and Hurricane Pike are great for kiting Ursa.", audience: [ALL]},
    {category: "EnemyHero", hero: "Ursa", audioFile: "heroes/Ursa_5_Roshan", messageTimes: [(15*60+10), (20*60+10), (25*60+10)], textMessage: "Ursa is able to take Roshan early on. Ward and check Roshan.", audience: [ALL]},

    // 109. Vengeful Spirit | 09.03.2021
    {category: "EnemyHero", hero: "Vengeful Spirit", audioFile: "heroes/Vengeful Spirit_1_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Vengeful Spirit in the fights as she provides saves and empowers her Cores.", audience: [ALL]},
    {category: "EnemyHero", hero: "Vengeful Spirit", audioFile: "heroes/Vengeful Spirit_2_Armor items", messageTime: (12*60), textMessage: "Armor items are great against Vengeful Spirit's Wave of Terror and Vengeance Aura.", audience: [ALL]},
    {category: "EnemyHero", hero: "Vengeful Spirit", audioFile: "heroes/Vengeful Spirit_3_Linkens lotus", messageTime: (12*60+10), textMessage: "Linken's Sphere and a well timed Lotus Orb are great against Magic Missile and Nether Swap.", audience: [ALL]},
    {category: "EnemyHero", hero: "Vengeful Spirit", audioFile: "heroes/Vengeful Spirit_4_Aghanims scpeter", messageTime: (15*60+10), textMessage: "If Vengeful bought Aghanim's Scepter, then you should ignore her in fights.", audience: [ALL]},

    // 110. Venomancer | 09.03.2021
    {category: "EnemyHero", hero: "Venomancer", audioFile: "heroes/Venomancer_1_Extra consumables", messageTime: (-60), textMessage: "Bring extra consumables to the lane against Venomancer's Poison Sting harass.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Venomancer", audioFile: "heroes/Venomancer_2_Cloak", messageTime: (5*60+10), textMessage: "Cloak has a lot of value against Venomancer's insane magic damage output.", audience: [ALL]},
    {category: "EnemyHero", hero: "Venomancer", audioFile: "heroes/Venomancer_3_Teleport out", messageTimes: [(5*60+20), (10*60+20), (15*60+20)], textMessage: "Consider teleporting out quickly when you find yourself in trouble against Venomancer.", audience: [ALL]},
    {category: "EnemyHero", hero: "Venomancer", audioFile: "heroes/Venomancer_4_Antimagic items", messageTime: (12*60), textMessage: "Spell immunity and magical resistance items are great against Venomancer.", audience: [ALL]},
    {category: "EnemyHero", hero: "Venomancer", audioFile: "heroes/Venomancer_5_Dispel items", messageTime: (12*60+10), textMessage: "Items that provide dispels are able to remove Venomous Gale and Poison Sting.", audience: [ALL]},

    // 111. Viper | 09.03.2021
    {category: "EnemyHero", hero: "Viper", audioFile: "heroes/Viper_1_Poison attack", messageTime: (-60), textMessage: "Don't allow Viper to stack more than 3 Poison Attacks on you.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Viper", audioFile: "heroes/Viper_2_Nethertoxin", messageTime: (30), textMessage: "Viper's Nethertoxin breaks passives. Stay away from it until you have a Black King Bar.", audience: [ALL]},
    {category: "EnemyHero", hero: "Viper", audioFile: "heroes/Viper_3_Teleport out", messageTimes: [(5*60+10), (10*60+10), (15*60+10)], textMessage: "Consider teleporting out quickly when you find yourself in trouble against Viper.", audience: [ALL]},
    {category: "EnemyHero", hero: "Viper", audioFile: "heroes/Viper_4_Antimagic items", messageTime: (12*60), textMessage: "Magic resistance items are great against Viper's magic damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Viper", audioFile: "heroes/Viper_5_Linkens lotus", messageTime: (12*60+10), textMessage: "Linken's Sphere and a well timed Lotus Orb are great against Viper Strike.", audience: [ALL]},

    // 112. Visage | 10.03.2021
    // @Alex: I don't understand this one: Does it mean that I have to make sure that I have at least 40 damage in lane to remove that buff? Don't all heroes have that anyway? (I didn't record this one) ANSWER: You need to deal an instance of damage higher than 40 to remove one layer of Gravekeeper's Cloak. Urn of Shadows won't do it as it does 20 per tick but it would be good to remove Templar Assassin's Refractions.
    //{category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_1_Gravekeepers cloak", messageTime: (30), textMessage: "Instance of 40 damage and more are removing a Gravekeeper's Cloak layer.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_2_Familiars", messageTime: (5*60+30), textMessage: "Visage's Familiars give a lot of gold and are easy to kill when Visage is not around.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_3_Snowbally", messageTimes: [(10*60+10), (15*60+20), (20*60+20)], textMessage: "Visage is snowbally hero and falls off in late game. Look to extend the game. Don't be greedy with items.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_4_Tower defense", messageTimes: [(10*60+20), (15*60+30), (20*60+30)], textMessage: "Visage takes down buildings fast with Familiars. Organize defense quickly.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_5_Break", messageTime: (12*60), textMessage: "Break effects are removing Gravekeeper's Cloak and Visage becomes much weaker.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_6_Crimson guard", messageTime: (12*60+10), textMessage: "Crimson Guard is great against the Familiar's physical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Visage", audioFile: "heroes/Visage_7_Aghanims scepter", messageTime: (15*60+10), textMessage: "Once Visage gets Aghanim's Scepter, place Observer wards and sentries and carry detection.", audience: [ALL]},

    // 113. Void Spirit | 10.03.2021
    {category: "EnemyHero", hero: "Void Spirit", audioFile: "heroes/Void Spirit_1_Control runes", messageTimes: [(4*60-30), (6*60-30), (8*60-30)], textMessage: "Control power runes against Void Spirit. He likes to bottle them and gank.", audience: [ALL]},
    {category: "EnemyHero", hero: "Void Spirit", audioFile: "heroes/Void Spirit_2_Instant disables", messageTime: (12*60), textMessage: "Instant disables and silences are great against the elusive Void Spirit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Void Spirit", audioFile: "heroes/Void Spirit_3_Antispell items", messageTime: (12*60+10), textMessage: "Magic resistance and spell immunity items are great against Void Spirit.", audience: [ALL]},
    {category: "EnemyHero", hero: "Void Spirit", audioFile: "heroes/Void Spirit_4_Aghanims scepter", messageTime: (12*60+20), textMessage: "Be aware of Void Spirit's Aghanim's Scepter timing as he gets AoE silence of 4s.", audience: [ALL]},

    // 114. Warlock | 10.03.2021
    {category: "EnemyHero", hero: "Warlock", audioFile: "heroes/Warlock_1_Chaotic offering", messageTimes: [(8*60), (18*60), (28*60)], textMessage: "Warlock's Chaotic Offering has long cooldown. Look to fight when it is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Warlock", audioFile: "heroes/Warlock_2_Clump up", messageTimes: [(10*60+10), (20*60+20), (30*60+20)], textMessage: "Avoid clumping up and fighting in choke spots against Warlock's spells.", audience: [ALL]},
    {category: "EnemyHero", hero: "Warlock", audioFile: "heroes/Warlock_3_Fatal bonds", messageTime: (12*60+10), textMessage: "Most of Warlock's damage comes from Fatal Bonds. Dispel items are great at removing them.", audience: [ALL]},
    {category: "EnemyHero", hero: "Warlock", audioFile: "heroes/Warlock_4_Spell immunity", messageTime: (12*60+20), textMessage: "Spell immunity is great against Warlocks spells.", audience: [ALL]},
    {category: "EnemyHero", hero: "Warlock", audioFile: "heroes/Warlock_5_Aghanim refresher", messageTime: (20*60+10), textMessage: "Be aware of Warlock's Aghanim's Scepter and Refresher Orb timings. He can carry the game.", audience: [ALL]},

    // 115. Weaver | 10.03.2021
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_1_Sentry consumables", messageTime: (-60), textMessage: "Bring a sentry and extra consumables to the lane against Weaver.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_2_The swarm", messageTime: (60+30), textMessage: "Remove The Swarm from yourself and from teammates or you will loose a lot of armor.", audience: [ALL]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_3_Time lapse", messageTime: (8*60), textMessage: "Weaver's Time Lapse will remove Dust of Appearance.", audience: [ALL]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_4_Protect supports", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Weaver is really good at killing supports and backliners. Protect them.", audience: [ALL]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_5_Invisible", messageTime: (12*60), textMessage: "Becoming invisible removes The Swarm unless you are being detected or Weaver has Shard upgrade.", audience: [ALL]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_6_Instant disables silences", messageTime: (12*60+10), textMessage: "Instant disables and silences are great against the elusive Weaver.", audience: [ALL]},
    {category: "EnemyHero", hero: "Weaver", audioFile: "heroes/Weaver_7_Counter items", messageTime: (12*60+20), textMessage: "Armor items, Heaven's Halberd and Ghost Scepter are great against Weaver's physical damage.", audience: [ALL]},

    // 116. Windranger | Earlier work
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_1_Spell harass", messageTime: (30), textMessage: "Windranger is susceptible to early game spell harass. Manage your mana and keep pressuring her", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_2_Powershot", messageTimes: [(1*60), (4*60)], textMessage: "Windranger's Powershot does lots of damage. Avoid being hit or at least don't be the first unit being hit", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_3_Ult and javelin", messageTimes: [(8*60+15), (13*60+15)], textMessage: "Windranger can easily kill most heroes with her ultimate and a single Javelin. Be mindful about that", audience: [ALL]},
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_4_Blade mail", messageTime: (7*60+15), textMessage: "Blade Mail is a decent counter against her ultimate", audience: [ALL]},
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_5_Shackleshot", messageTimes: [(8*60+45), (18*60+45)], textMessage: "To counter Windranger's Shackleshot, try to stay away from trees and make sure you don't have creeps or heroes behind you. Linken's Sphere is also helpful against Shackleshot", chatMessage: "To counter Windranger's Shackleshot stay away from trees and don't have creeps or heroes behind you", audience: [ALL]},
    {category: "EnemyHero", hero: "Windranger", audioFile: "heroes/Windranger_6_Windrun", messageTimes: [(6*60+15), (12*60+15)], textMessage: "Windranger's Windrun ability is countered by items that pierce through evasion, cause magical damage and dispels such as Silver Edge", chatMessage: "Windranger's Windrun is countered by items that pierce through evasion, cause magical damage and dispels", audience: [ALL]},

    // 117. Winter Wyvern | 10.03.2021
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_1_ArcticBurn1", messageTime: -30, textMessage: "Make sure to hit each enemy at least once to apply the Arctic Burn debuff.", audience: [ALL]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_2_SplinterBlast", messageTime: 30, textMessage: "Avoid Splinter Blasting melee creeps until it reaches level 4 as you will put ranged creep in deny range.", audience: [ALL]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_3_ColdEmbrace", messageTime: 90, textMessage: "Be careful when using Cold Embrace as a save. Oftentimes it is better to use your slows or Winter's Curse.", audience: [ALL]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_4_ArcticBurn2", messageTime: 2*60+30, repeatTime: 10*60, textMessage: "If you feel like you might be gone on, it is good to play close to trees or cliffs, so you can escape with Arctic Burn.", audience: [ALL]},
    //@Alex: What doy ou mean be "might be gone"? Might die? Might want to leave the fight?
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_5_WintersCurse1", messageTime: 10*60, repeatTime: 30*60, textMessage: "Avoid showing yourself early in fights. Stay hidden and play around your Winter's Curse and Cold Embrace. Use Arctic burn to reposition.", audience: [ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_6_WintersCurse2", messageTime: 20*60, repeatTime: 30*60, textMessage: "Use Curse carefully in the middle of fights as you might waste a lot of your ally's damage and cooldowns.", audience: [ALL]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_7_Scepter", messageTime: 14*60, textMessage: "Aghanim's Scepter is crucial for right-click build. Make sure you take time to farm it.", audience: [ROLE_CORE]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_8_Blink", messageTime: 17*60, textMessage: "Having timely Blink Dagger will allow you to seize a moment and land multi-hero Winter's Curses.", audience: [ROLE_OFFLANE, ROLE_SUPPORT]},
    {category: "OwnHero", hero: "Winter Wyvern", audioFile: "ownHero/Winter Wyvern_9_WintersCurse3", messageTime: 30*60, repeatTime: 30*60, textMessage: "Fight around good vision so you can position well and land multi-hero Winter's Curses.", audience: [ALL]},

    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_1_Arctic burn", messageTime: (-60), textMessage: "Winter Wyvern is bad at trading when Arctic Burn is down.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_2_Cold embrace", messageTime: (60+30), textMessage: "Cold Embrace prevents all physical damage.", audience: [ALL]},
    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_3_Focus", messageTimes: [(10*60+10), (20*60+10), (30*60+10)], textMessage: "Focus Winter Wyvern in fights as she provides saves and disables for her team.", audience: [ALL]},
    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_4_Clump up", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Avoid clumping up and fighting in choke spots against Winter's Curse.", audience: [ALL]},
    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_5_Black king bar", messageTime: (12*60), textMessage: "Black King Bar prevents you from hitting a Cursed unit, but you can still get cursed yourself.", audience: [ALL]},
    {category: "EnemyHero", hero: "Winter Wyvern", audioFile: "heroes/Winter Wyvern_6_Status resistance", messageTime: (12*60+10), textMessage: "Status resistance items shorten the duration of Winter's Curse.", audience: [ALL]},

    // 118. Witch Doctor | 10.03.2021
    {category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_1_Paralyzing cask", messageTimes: [(-60), (10*60+10), (20*60+20)], textMessage: "Don't clump up because of Witch Doctor's Paralyzing Cask.", audience: [ALL]},
    {category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_2_Paralyzing cask summons", messageTime: (-50), textMessage: "Paralyzing Cask stuns creeps for 5 seconds. Keep your summons away from Witch Doctor.", audience: [ALL]},
    {category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_3_Strong laner", messageTime: (2*60+20), textMessage: "Witch Doctor is a strong laner, especially when he gets a second point in Maledict.", audience: [ALL]},
    {category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_4_Solo kill", messageTime: (8*60), textMessage: "Witch Doctor can solo kill most heroes with Death Ward. Track his movements on the map.", audience: [ALL]},
    /*{category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_5_Crimson guard", messageTime: (12*60), textMessage: "Crimson Guard is great at reducing damage from Death Ward.", audience: [ALL]}, Message is no longer valid 21.6.2021 */
    {category: "EnemyHero", hero: "Witch Doctor", audioFile: "heroes/Witch Doctor_6_Aghanims scepter", messageTime: (20*60+10), textMessage: "Be aware of Witch Doctor's Aghanim's Scepter purchase. Focus him in the fights or cancel his Ulti.", audience: [ALL]},

    // 119. Wraith King | 10.03.2021
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_1_Low armor", messageTime: (-60), textMessage: "Wraith King has low armor. Pressure him with right clicks.", audience: [IN_LANE]},
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_2_Reincarnation cd", messageTimes: [(8*60), (10*60+30), (12*60+30)], textMessage: "Reincarnation has a long cooldown on level 1. Look to pressure Wraith King while it is down.", audience: [ALL]},
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_3_Contest farm", messageTime: (10*60+10), textMessage: "Wraith King farms quickly with skeletons. Smoke on him, place deep wards and sentry off camps.", audience: [ALL]},
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_4_Big cooldowns", messageTimes: [(10*60+20), (20*60+20), (30*60+20)], textMessage: "Don't use all your energy on Wraith King's first life unless you are sure you can kill him once more.", audience: [ALL]},
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_5_Mana burns", messageTime: (12*60), textMessage: "Mana burns are great at stopping Wraith King's Ulti until he gets Aghanim's Shard.", audience: [ALL]},
    {category: "EnemyHero", hero: "Wraith King", audioFile: "heroes/Wraith King_6_Radiance", messageTime: (15*60+10), textMessage: "Be aware of Wraith King's Radiance timing. He'll be looking to fight you.", audience: [ALL]},

    // 120. Zeus | Earlier work | NOTE: Zeus ulty does 300 damage but after redcutions it does around 225-230. I think it is fine to keep the message as it is.
    {category: "EnemyHero", hero: "Zeus", audioFile: "heroes/Zeus_1_Magic resistance", messageTime: (-60), textMessage: "Agree on who builds magic resistance items such as Pipe of Insight against Zeus - all players should have items with some magic resistance", chatMessage: "Agree on who builds magic resistance items such as Pipe of Insight against Zeus", audience: [ALL], image: {type: "item", name: "pipe"}},
    {category: "EnemyHero", hero: "Zeus", audioFile: "heroes/Zeus_2_Wards", messageTimes: [(-40), (4*60+40), (10*60+40)], textMessage: "Place wards in unusual spots because of Zeus", audience: [ALL], image: {type: "item", name: "ward_observer"}},
    {category: "EnemyHero", hero: "Zeus", audioFile: "heroes/Zeus_3_HP thundergod", messageTime: (5*60 + 30), textMessage: "Keep your HP above Thundergod's Wrath damage of 300", audience: [ALL], image: {type: "ability", name: "zuus_thundergods_wrath"}},
    {category: "EnemyHero", hero: "Zeus", audioFile: "heroes/Zeus_4_Power runes", messageTime: (6*60), textMessage: "Control Power Runes to prevent Zeus from getting arcane or regeneration runes", audience: [ALL], image: {type: "rune", name: "arcane"}},
    {category: "EnemyHero", hero: "Zeus", audioFile: "heroes/Zeus_5_Smoke of deceit", messageTime: (10*60), textMessage: "Smoke of Deceit can be useful to dodge Thundergod's Wrath or to wrap around Zeus to catch him off-guard", audience: [ALL], image: {type: "item", name: "smoke_of_deceit"}}
    ]