export declare enum BaseObjectType {
    Player = 0,
    Vehicle = 1,
    Ped = 2,
    Object = 3,
    Blip = 4,
    WebView = 5,
    VoiceChannel = 6,
    Colshape = 7,
    Checkpoint = 8,
    WebSocketClient = 9,
    HttpClient = 10,
    Audio = 11,
    AudioOutput = 12,
    AudioOutputWorld = 13,
    AudioOutputAttached = 14,
    AudioOutputFrontend = 15,
    RmlElement = 16,
    RmlDocument = 17,
    LocalPlayer = 18,
    LocalObject = 19,
    VirtualEntity = 20,
    VirtualEntityGroup = 21,
    Marker = 22,
    TextLabel = 23,
    LocalPed = 24,
    LocalVehicle = 25,
    AudioFilter = 26,
    ConnectionInfo = 27,
    CustomTexture = 28,
    Font = 29,
    Size = 30
}
export declare enum BlipSprite {
    Higher = 0,
    Lower = 1,
    PolicePed = 2,
    WantedRadius = 3,
    Area = 4,
    Centre = 5,
    North = 6,
    Waypoint = 7,
    Radius = 8,
    RadiusOutline = 9,
    WeaponHigher = 10,
    WeaponLower = 11,
    HigherAI = 12,
    LowerAI = 13,
    PoliceHeliSpin = 14,
    PolicePlaneMove = 15,
    MPCrew = 27,
    MPFriendlies = 28,
    CableCar = 36,
    Activities = 37,
    Raceflag = 38,
    Safehouse = 40,
    Police = 41,
    PoliceChase = 42,
    PoliceHeli = 43,
    BombA = 44,
    Snitch = 47,
    PlanningLocations = 48,
    CriminalCarsteal = 50,
    CriminalDrugs = 51,
    CriminalHoldups = 52,
    CriminalPlayer = 54,
    CopPatrol = 56,
    CopPlayer = 57,
    CriminalWanted = 58,
    Heist = 59,
    PoliceStation = 60,
    Hospital = 61,
    AssassinsMark = 62,
    Elevator = 63,
    Helicopter = 64,
    RandomCharacter = 66,
    SecurityVan = 67,
    TowTruck = 68,
    IllegalParking = 70,
    Barber = 71,
    CarModShop = 72,
    ClothesStore = 73,
    Tattoo = 75,
    ArmenianFamily = 76,
    LesterFamily = 77,
    MichaelFamily = 78,
    TrevorFamily = 79,
    JewelryHeist = 80,
    DragRaceFinish = 82,
    Rampage = 84,
    VinewoodTours = 85,
    LamarFamily = 86,
    FranklinFamily = 88,
    ChineseStrand = 89,
    FlightSchool = 90,
    EyeSky = 91,
    AirHockey = 92,
    Bar = 93,
    BaseJump = 94,
    Basketball = 95,
    BiolabHeist = 96,
    CabaretClub = 99,
    CarWash = 100,
    ComedyClub = 102,
    Darts = 103,
    DocksHeist = 104,
    FbiHeist = 105,
    FbiOfficersStrand = 106,
    FinaleBankHeist = 107,
    FinancierStrand = 108,
    Golf = 109,
    GunShop = 110,
    InternetCafe = 111,
    MichaelFamilyExile = 112,
    NiceHouseHeist = 113,
    RandomFemale = 114,
    RandomMale = 115,
    RuralBankHeist = 118,
    ShootingRange = 119,
    SolomonStrand = 120,
    StripClub = 121,
    Tennis = 122,
    TrevorFamilyExile = 123,
    MichaelTrevorFamily = 124,
    Triathlon = 126,
    OffRoadRacing = 127,
    GangCops = 128,
    GangMexicans = 129,
    GangBikers = 130,
    SnitchRed = 133,
    CriminalCuffKeys = 134,
    Cinema = 135,
    MusicVenue = 136,
    PoliceStationBlue = 137,
    Airport = 138,
    CriminalSavedVehicle = 139,
    WeedStash = 140,
    Hunting = 141,
    Pool = 142,
    ObjectiveBlue = 143,
    ObjectiveGreen = 144,
    ObjectiveRed = 145,
    ObjectiveYellow = 146,
    ArmsDealing = 147,
    MPFriend = 148,
    CelebrityTheft = 149,
    WeaponAssaultRifle = 150,
    WeaponBat = 151,
    WeaponGrenade = 152,
    WeaponHealth = 153,
    WeaponKnife = 154,
    WeaponMolotov = 155,
    WeaponPistol = 156,
    WeaponRocket = 157,
    WeaponShotgun = 158,
    WeaponSmg = 159,
    WeaponSniper = 160,
    MPNoise = 161,
    PointOfInterest = 162,
    Passive = 163,
    UsingMenu = 164,
    GangCopsPartner = 171,
    WeaponMinigun = 173,
    WeaponArmour = 175,
    PropertyTakeover = 176,
    GangMexicansHighlight = 177,
    GangBikersHighlight = 178,
    TriathlonCycling = 179,
    TriathlonSwimming = 180,
    PropertyTakeoverBikers = 181,
    PropertyTakeoverCops = 182,
    PropertyTakeoverVagos = 183,
    Camera = 184,
    CentreRed = 185,
    HandcuffKeysBikers = 186,
    HandcuffKeysVagos = 187,
    HandcuffsClosedBikers = 188,
    HandcuffsClosedVagos = 189,
    CameraBadger = 192,
    CameraFacade = 193,
    CameraIfruit = 194,
    Yoga = 197,
    Taxi = 198,
    Shrink = 205,
    Epsilon = 206,
    FinancierStrandGrey = 207,
    TrevorFamilyGrey = 208,
    TrevorFamilyRed = 209,
    FranklinFamilyGrey = 210,
    FranklinFamilyBlue = 211,
    FranklinA = 212,
    FranklinB = 213,
    FranklinC = 214,
    GangVehicle = 225,
    GangVehicleBikers = 226,
    GangVehicleCops = 227,
    GangVehicleVagos = 228,
    Guncar = 229,
    DrivingBikers = 230,
    DrivingCops = 231,
    DrivingVagos = 232,
    GangCopsHighlight = 233,
    ShieldBikers = 234,
    ShieldCops = 235,
    ShieldVagos = 236,
    CustodyBikers = 237,
    CustodyVagos = 238,
    ArmsDealingAir = 251,
    PlayerStateArrested = 252,
    PlayerStateCustody = 253,
    PlayerStateDriving = 254,
    PlayerStateKeyholder = 255,
    PlayerStatePartner = 256,
    Ztype = 262,
    Stinger = 263,
    Packer = 264,
    Monroe = 265,
    Fairground = 266,
    Property = 267,
    GangHighlight = 268,
    Altruist = 269,
    AI = 270,
    OnMission = 271,
    CashPickup = 272,
    Chop = 273,
    Dead = 274,
    TerritoryLocked = 275,
    CashLost = 276,
    CashVagos = 277,
    CashCops = 278,
    Hooker = 279,
    Friend = 280,
    Mission2to4 = 281,
    Mission2to8 = 282,
    Mission2to12 = 283,
    Mission2to16 = 284,
    CustodyDropOff = 285,
    OnMissionCops = 286,
    OnMissionLost = 287,
    OnMissionVagos = 288,
    CriminalCarStealCops = 289,
    CriminalCarStealBikers = 290,
    CriminalCarStealVagos = 291,
    BandStrand = 292,
    SimeonFamily = 293,
    Mission1 = 294,
    Mission2 = 295,
    FriendDarts = 296,
    FriendComedyClub = 297,
    FriendCinema = 298,
    FriendTennis = 299,
    FriendStripClub = 300,
    FriendLiveMusic = 301,
    FriendGolf = 302,
    BountyHit = 303,
    UgcMission = 304,
    Horde = 305,
    CrateDrop = 306,
    PlaneDrop = 307,
    Sub = 308,
    Race = 309,
    Deathmatch = 310,
    ArmWrestling = 311,
    Mission1to2 = 312,
    ShootingRangeGunShop = 313,
    RaceAir = 314,
    RaceLand = 315,
    RaceSea = 316,
    Tow = 317,
    Garbage = 318,
    Drill = 319,
    Spikes = 320,
    Firetruck = 321,
    Minigun2 = 322,
    Bugstar = 323,
    Submarine = 324,
    Chinook = 325,
    GetawayCar = 326,
    MissionBikers1 = 327,
    MissionBikers1to2 = 328,
    MissionBikers2 = 329,
    MissionBikers2to4 = 330,
    MissionBikers2to8 = 331,
    MissionBikers2to12 = 332,
    MissionBikers2to16 = 333,
    MissionCops1 = 334,
    MissionCops1to2 = 335,
    MissionCops2 = 336,
    MissionCops2to4 = 337,
    MissionCops2to8 = 338,
    MissionCops2to12 = 339,
    MissionCops2to16 = 340,
    MissionVagos1 = 341,
    MissionVagos1to2 = 342,
    MissionVagos2 = 343,
    MissionVagos2to4 = 344,
    MissionVagos2to8 = 345,
    MissionVagos2to12 = 346,
    MissionVagos2to16 = 347,
    GangBike = 348,
    GasGrenade = 349,
    PropertyForSale = 350,
    GangAttackPackage = 351,
    MartinMadrazzo = 352,
    EnemyHeliSpin = 353,
    Boost = 354,
    Devin = 355,
    Dock = 356,
    Garage = 357,
    GolfFlag = 358,
    Hangar = 359,
    Helipad = 360,
    JerryCan = 361,
    Mask = 362,
    HeistPrep = 363,
    Incapacitated = 364,
    SpawnPointPickup = 365,
    Boilersuit = 366,
    Completed = 367,
    Rockets = 368,
    GarageForSale = 369,
    HelipadForSale = 370,
    DockForSale = 371,
    HangarForSale = 372,
    Placeholder6 = 373,
    Business = 374,
    BusinessForSale = 375,
    RaceBike = 376,
    Parachute = 377,
    TeamDeathmatch = 378,
    RaceFoot = 379,
    VehicleDeathmatch = 380,
    Barry = 381,
    Dom = 382,
    Maryann = 383,
    Cletus = 384,
    Josh = 385,
    Minute = 386,
    Omega = 387,
    Tonya = 388,
    Paparazzo = 389,
    Aim = 390,
    CrateDropBackground = 391,
    GreenAndNetPlayer1 = 392,
    GreenAndNetPlayer2 = 393,
    GreenAndNetPlayer3 = 394,
    GreenAndFriendly = 395,
    NetPlayer1AndNetPlayer2 = 396,
    NetPlayer1AndNetPlayer3 = 397,
    Creator = 398,
    CreatorDirection = 399,
    Abigail = 400,
    Blimp = 401,
    Repair = 402,
    Testosterone = 403,
    Dinghy = 404,
    Fanatic = 405,
    InfoIcon = 407,
    CaptureTheFlag = 408,
    LastTeamStanding = 409,
    Boat = 410,
    CaptureTheFlagBase = 411,
    CaptureTheFlagOutline = 413,
    CaptureTheFlagBaseNoBag = 414,
    WeaponJerrycan = 415,
    Rp = 416,
    LevelInside = 417,
    BountyHitInside = 418,
    CaptureTheUSAFlag = 419,
    CaptureTheUSAFlagOutline = 420,
    Tank = 421,
    PlayerHeli = 422,
    PlayerPlane = 423,
    PlayerJet = 424,
    CentreStroke = 425,
    PlayerGunCar = 426,
    PlayerBoat = 427,
    MPHeist = 428,
    Temp1 = 429,
    Temp2 = 430,
    Temp3 = 431,
    Temp4 = 432,
    Temp5 = 433,
    Temp6 = 434,
    RaceStunt = 435,
    HotProperty = 436,
    UrbanWarfareVersus = 437,
    KingOfTheCastle = 438,
    PlayerKing = 439,
    DeadDrop = 440,
    PennedIn = 441,
    Beast = 442,
    EdgePointer = 443,
    EdgeCrossTheLine = 444,
    MPLamar = 445,
    Bennys = 446,
    CornerNumber1 = 447,
    CornerNumber2 = 448,
    CornerNumber3 = 449,
    CornerNumber4 = 450,
    CornerNumber5 = 451,
    CornerNumber6 = 452,
    CornerNumber7 = 453,
    CornerNumber8 = 454,
    Yacht = 455,
    FindersKeepers = 456,
    AssaultPackage = 457,
    HuntTheBoss = 458,
    Sightseer = 459,
    TurretedLimo = 460,
    BellyOfTheBeast = 461,
    YachtLocation = 462,
    PickupBeast = 463,
    PickupZoned = 464,
    PickupRandom = 465,
    PickupSlowTime = 466,
    PickupSwap = 467,
    PickupThermal = 468,
    PickupWeed = 469,
    WeaponRailgun = 470,
    Seashark = 471,
    PickupHidden = 472,
    Warehouse = 473,
    WarehouseForSale = 474,
    Office = 475,
    OfficeForSale = 476,
    Truck = 477,
    Contraband = 478,
    Trailer = 479,
    VIP = 480,
    Cargobob = 481,
    AreaOutline = 482,
    PickupAccelerator = 483,
    PickupGhost = 484,
    PickupDetonator = 485,
    PickupBomb = 486,
    PickupArmoured = 487,
    Stunt = 488,
    WeaponLives = 489,
    StuntPremium = 490,
    Adversary = 491,
    BikerClubhouse = 492,
    BikerCagedIn = 493,
    BikerTurfWar = 494,
    BikerJoust = 495,
    ProductionWeed = 496,
    ProductionCrack = 497,
    ProductionFakeId = 498,
    ProductionMeth = 499,
    ProductionMoney = 500,
    Package = 501,
    Capture1 = 502,
    Capture2 = 503,
    Capture3 = 504,
    Capture4 = 505,
    Capture5 = 506,
    Capture6 = 507,
    Capture7 = 508,
    Capture8 = 509,
    Capture9 = 510,
    Capture10 = 511,
    Quad = 512,
    Bus = 513,
    DrugsPackage = 514,
    PickupJump = 515,
    Adversary4 = 516,
    Adversary8 = 517,
    Adversary10 = 518,
    Adversary12 = 519,
    Adversary16 = 520,
    Laptop = 521,
    PickupDeadline = 522,
    SportsCar = 523,
    WarehouseVehicle = 524,
    RegPapers = 525,
    PoliceStationDropoff = 526,
    Junkyard = 527,
    ExVech1 = 528,
    ExVech2 = 529,
    ExVech3 = 530,
    ExVech4 = 531,
    ExVech5 = 532,
    ExVech6 = 533,
    ExVech7 = 534,
    TargetA = 535,
    TargetB = 536,
    TargetC = 537,
    TargetD = 538,
    TargetE = 539,
    TargetF = 540,
    TargetG = 541,
    TargetH = 542,
    Juggernaut = 543,
    PickupRepair = 544,
    SteeringWheel = 545,
    Trophy = 546,
    PickupRocketBoost = 547,
    PickupHomingRocket = 548,
    PickupMachinegun = 549,
    PickupParachute = 550,
    PickupTime5 = 551,
    PickupTime10 = 552,
    PickupTime15 = 553,
    PickupTime20 = 554,
    PickupTime30 = 555,
    Supplies = 556,
    PropertyBunker = 557,
    GrWvm1 = 558,
    GrWvm2 = 559,
    GrWvm3 = 560,
    GrWvm4 = 561,
    GrWvm5 = 562,
    GrWvm6 = 563,
    GrCovertOps = 564,
    AdversaryBunker = 565,
    GrMocUpgrade = 566,
    GrWUpgrade = 567,
    SmCargo = 568,
    SmHangar = 569,
    TfCheckpoint = 570,
    RaceTf = 571,
    SmWp1 = 572,
    SmWp2 = 573,
    SmWp3 = 574,
    SmWp4 = 575,
    SmWp5 = 576,
    SmWp6 = 577,
    SmWp7 = 578,
    SmWp8 = 579,
    SmWp9 = 580,
    SmWp10 = 581,
    SmWp11 = 582,
    SmWp12 = 583,
    SmWp13 = 584,
    SmWp14 = 585,
    NhpBag = 586,
    NhpChest = 587,
    NhpOrbit = 588,
    NhpVeh1 = 589,
    NhpBase = 590,
    NhpOverlay = 591,
    NhpTurret = 592,
    NhpMgFirewall = 593,
    NhpMgNode = 594,
    NhpWp1 = 595,
    NhpWp2 = 596,
    NhpWp3 = 597,
    NhpWp4 = 598,
    NhpWp5 = 599,
    NhpWp6 = 600,
    NhpWp7 = 601,
    NhpWp8 = 602,
    NhpWp9 = 603,
    NhpCCTV = 604,
    NhpStarterpack = 605,
    NhpTurretConsole = 606,
    NhpMgMirRotate = 607,
    NhpMgMirStatic = 608,
    NhpMgProxy = 609,
    AcsrRaceTarget = 610,
    AcsrRaceHotring = 611,
    AcsrWp1 = 612,
    AcsrWp2 = 613,
    BatClubProperty = 614,
    BatCargo = 615,
    BatTruck = 616,
    BatHackJewel = 617,
    BatHackGold = 618,
    BatKeypad = 619,
    BatHackTarget = 620,
    PickupDtbHealth = 621,
    PickupDtbBlastIncrease = 622,
    PickupDtbBlastDecrease = 623,
    PickupDtbBombIncrease = 624,
    PickupDtbBombDecrease = 625,
    BatRivalClub = 626,
    BatDrone = 627,
    BatCashReg = 628,
    CCTV = 629,
    BatAssassinate = 630,
    BatPbus = 631,
    BatWp1 = 632,
    BatWp2 = 633,
    BatWp3 = 634,
    BatWp4 = 635,
    BatWp5 = 636,
    BatWp6 = 637,
    Blimp2 = 638,
    Oppressor2 = 639,
    BatWp7 = 640,
    ArenaSeries = 641,
    ArenaPremium = 642,
    ArenaWorkshop = 643,
    RaceWars = 644,
    ArenaTurret = 645,
    ArenaRCCar = 646,
    ArenaRCWorkshop = 647,
    ArenaTrapFire = 648,
    ArenaTrapFlip = 649,
    ArenaTrapSea = 650,
    ArenaTrapTurn = 651,
    ArenaTrapPit = 652,
    ArenaTrapMine = 653,
    ArenaTrapBomb = 654,
    ArenaTrapWall = 655,
    ArenaTrapBrd = 656,
    ArenaTrapSbrd = 657,
    ArenaBruiser = 658,
    ArenaBrutus = 659,
    ArenaCerberus = 660,
    ArenaDeathbike = 661,
    ArenaDominator = 662,
    ArenaImpaler = 663,
    ArenaImperator = 664,
    ArenaIssi = 665,
    ArenaSasquatch = 666,
    ArenaScarab = 667,
    ArenaSlamvan = 668,
    ArenaZr = 669,
    AP = 670,
    ComicStore = 671,
    CopCar = 672,
    RCTimeTrials = 673,
    KingOfTheHill = 674,
    KingOfTheHillTeams = 675,
    Rucksack = 676,
    ShippingContainer = 677,
    Agatha = 678,
    Casino = 679,
    CasinoTableGames = 680,
    CasinoWheel = 681,
    CasinoConcierge = 682,
    CasinoChips = 683,
    CasinoHorseRacing = 684,
    AdversaryFeatured = 685,
    Roulette1 = 686,
    Roulette2 = 687,
    Roulette3 = 688,
    Roulette4 = 689,
    Roulette5 = 690,
    Roulette6 = 691,
    Roulette7 = 692,
    Roulette8 = 693,
    Roulette9 = 694,
    Roulette10 = 695,
    Roulette11 = 696,
    Roulette12 = 697,
    Roulette13 = 698,
    Roulette14 = 699,
    Roulette15 = 700,
    Roulette16 = 701,
    Roulette17 = 702,
    Roulette18 = 703,
    Roulette19 = 704,
    Roulette20 = 705,
    Roulette21 = 706,
    Roulette22 = 707,
    Roulette23 = 708,
    Roulette24 = 709,
    Roulette25 = 710,
    Roulette26 = 711,
    Roulette27 = 712,
    Roulette28 = 713,
    Roulette29 = 714,
    Roulette30 = 715,
    Roulette31 = 716,
    Roulette32 = 717,
    Roulette33 = 718,
    Roulette34 = 719,
    Roulette35 = 720,
    Roulette36 = 721,
    Roulette0 = 722,
    Roulette00 = 723,
    Limo = 724,
    WeaponAlien = 725,
    RaceOpenWheel = 726,
    Rappel = 727,
    SwapCar = 728,
    ScubaGear = 729,
    Cpanel1 = 730,
    Cpanel2 = 731,
    Cpanel3 = 732,
    Cpanel4 = 733,
    SnowTruck = 734,
    Buggy1 = 735,
    Buggy2 = 736,
    Zhaba = 737,
    Gerald = 738,
    Ron = 739,
    Arcade = 740,
    DroneControls = 741,
    RCTank = 742,
    Stairs = 743,
    Camera2 = 744,
    Winky = 745,
    MiniSub = 746,
    KartRetro = 747,
    KartModern = 748,
    MilitaryQuad = 749,
    MilitaryTruck = 750,
    ShipWheel = 751,
    UFO = 752,
    Seasparrow2 = 753,
    Dinghy2 = 754,
    PatrolBoat = 755,
    RetroSportsCar = 756,
    Squadee = 757,
    FoldingWingJet = 758,
    Valkyrie2 = 759,
    Sub2 = 760,
    BoltCutters = 761,
    RappelGear = 762,
    KeyCard = 763,
    Password = 764,
    IslandHeistPrep = 765,
    IslandParty = 766,
    ControlTower = 767,
    UnderwaterGate = 768,
    PowerSwitch = 769,
    CompoundGate = 770,
    RappelPoint = 771,
    KeyPad = 772,
    SubControls = 773,
    SubPeriscope = 774,
    SubMissile = 775,
    Painting = 776,
    CarMeet = 777,
    CarTestArea = 778,
    AutoShopProperty = 779,
    DocksExport = 780,
    PrizeCar = 781,
    TestCar = 782,
    CarRobberyBoard = 783,
    CarRobberyPrep = 784,
    StreetRaceSeries = 785,
    PursuitSeries = 786,
    CarMeetOrganiser = 787,
    SecuroServ = 788,
    BountyCollectibles = 789,
    MovieCollectibles = 790,
    TrailerRamp = 791,
    RaceOrganiser = 792,
    ChalkboardList = 793,
    ExportVehicle = 794,
    Train = 795,
    HeistDiamond = 796,
    HeistDoomsday = 797,
    HeistIsland = 798,
    Slamvan2 = 799,
    Crusader = 800,
    ConstructionOutfit = 801,
    OverlayJammed = 802,
    HeistIslandUnavailable = 803,
    HeistDiamondUnavailable = 804,
    HeistDoomsdayUnavailable = 805,
    Placeholder7 = 806,
    Placeholder8 = 807,
    Placeholder9 = 808,
    FeaturedSeries = 809,
    VehicleForSale = 810,
    VanKeys = 811,
    SuvService = 812,
    SecurityContract = 813,
    Safe = 814,
    PedR = 815,
    PedE = 816,
    Payphone = 817,
    Patriot3 = 818,
    MusicStudio = 819,
    Jubilee = 820,
    Granger2 = 821,
    ExplosiveCharge = 822,
    Deity = 823,
    DChampion = 824,
    Buffalo4 = 825,
    Agency = 826
}
export declare enum BlipColor {
    White = 0,
    Red = 1,
    Green = 2,
    Blue = 3,
    Yellow = 5,
    LightRed = 6,
    Violet = 7,
    Pink = 8,
    LightOrange = 9,
    LightBrown = 10,
    LightGreen = 11,
    LightBlue = 12,
    LightPurple = 13,
    DarkPurple = 14,
    Cyan = 15,
    LightYellow = 16,
    Organe = 17,
    DarkPink = 19,
    GraniteGreen = 20,
    DarkBrown = 21,
    LightGray = 22,
    LightPink = 23,
    LemonGreen = 24,
    ForestGreen = 25,
    ElectricBlue = 26,
    BrightPurple = 27,
    DarkYellow = 28,
    DarkCyan = 30,
    Beige = 36,
    DarkGray = 40,
    PinkRed = 41,
    Gold = 46,
    Orange = 47,
    BrilliantRose = 48,
    MediumPurple = 50,
    Salmon = 51,
    DarkGreen = 52,
    BlizzardBlue = 53,
    OracleBlue = 54,
    Silver = 55,
    EastBay = 58,
    YellowOrange = 60,
    MulberryPink = 61,
    AltoGray = 62,
    JellyBeanBlue = 63,
    DarkOrange = 64,
    Mamba = 65,
    TransparentBlack = 72,
    DeepRed = 76,
    TransparentRed = 79,
    TransparentBlue = 80,
    Purple = 83
}
export declare enum BlipType {
    Vehicle = 1,
    Ped = 2,
    Object = 3,
    Destination = 4,
    Cont = 5,
    PickupUnk = 6,
    Radius = 7,
    Pickup = 8,
    Cop = 9,
    Area = 10,
    Gallery = 11,
    PickupObject = 12
}
export declare enum MarkerType {
    MarkerCone = 0,
    MarkerCylinder = 1,
    MarkerArrow = 2,
    MarkerArrowFlat = 3,
    MarkerFlag = 4,
    MarkerRingFlag = 5,
    MarkerRing = 6,
    MarkerPlane = 7,
    MarkerBikeLogo1 = 8,
    MarkerBikeLogo2 = 9,
    MarkerNum0 = 10,
    MarkerNum1 = 11,
    MarkerNum2 = 12,
    MarkerNum3 = 13,
    MarkerNum4 = 14,
    MarkerNum5 = 15,
    MarkerNum6 = 16,
    MarkerNum7 = 17,
    MarkerNum8 = 18,
    MarkerNum9 = 19,
    MarkerChevron1 = 20,
    MarkerChevron2 = 21,
    MarkerChevron3 = 22,
    MarkerRingFlat = 23,
    MarkerLap = 24,
    MarkerHalo = 25,
    MarkerHaloPoint = 26,
    MarkerHaloRotate = 27,
    MarkerSphere = 28,
    MarkerMoney = 29,
    MarkerLines = 30,
    MarkerBeast = 31,
    MarkerQuestionMark = 32,
    MarkerTransformPlane = 33,
    MarkerTransformHelicopter = 34,
    MarkerTransformBoat = 35,
    MarkerTransformCar = 36,
    MarkerTransformBike = 37,
    MarkerTransformPushBike = 38,
    MarkerTransformTruck = 39,
    MarkerTransformParachute = 40,
    MarkerTransformThruster = 41,
    MarkerWarp = 42,
    MarkerBoxes = 43,
    MarkerPitLane = 44
}
export declare enum ColShapeType {
    Sphere = 0,
    Cylinder = 1,
    Circle = 2,
    Cuboid = 3,
    Rectangle = 4,
    CheckpointCylinder = 5,
    Polygon = 6
}
export declare enum AudioCategories {
    x44E21C90 = "0x44E21C90",
    xBAD598C7 = "0xBAD598C7",
    xA4D158B0 = "0xA4D158B0",
    FrontendMenu = "frontend_menu",
    Cutscenes = "cutscenes",
    GameWorld = "game_world",
    Ambience = "ambience",
    Weapons = "weapons",
    Peds = "peds",
    Speech = "speech",
    Vehicles = "vehicles",
    Collisions = "collisions",
    HUD = "hud",
    WeaponsExplosions = "weapons_explosions",
    WeaponsGuns = "weapons_guns",
    x4E8BCAED = "0x4E8BCAED",
    x32157574 = "0x32157574",
    PedsClothing = "peds_clothing",
    PedsCollisions = "peds_collisions",
    xF7C35252 = "0xF7C35252",
    VehiclesHelis = "vehicles_helis",
    VehiclesWheels = "vehicles_wheels",
    VehiclesWheelsSkids = "vehicles_wheels_skids",
    x2EED1D0A = "0x2EED1D0A",
    VehiclesHorns = "vehicles_horns",
    VehiclesHornsLoud = "vehicles_horns_loud",
    VehiclesSirens = "vehicles_sirens",
    VehiclesDoors = "vehicles_doors",
    VehiclesBrakes = "vehicles_brakes",
    VehiclesChassisRattle = "vehicles_chassis_rattle",
    VehiclesSuspension = "vehicles_suspension",
    xDF9CFFD4 = "0xDF9CFFD4",
    VehiclesEnginesIntake = "vehicles_engines_intake",
    xF48DE3B3 = "0xF48DE3B3",
    VehiclesEnginesDamage = "vehicles_engines_damage",
    VehiclesEnginesIgnition = "vehicles_engines_ignition",
    xB607457F = "0xB607457F",
    x39736A51 = "0x39736A51",
    x3F6594E4 = "0x3F6594E4",
    xE86DF43F = "0xE86DF43F",
    x1C507071 = "0x1C507071",
    Music = "music",
    MusicLoading = "music_loading",
    x6244F855 = "0x6244F855",
    xD59675EA = "0xD59675EA",
    xEA185B02 = "0xEA185B02",
    xAC3F546D = "0xAC3F546D",
    x41ACDDFF = "0x41ACDDFF",
    xC8B2D787 = "0xC8B2D787",
    x3AA35DEF = "0x3AA35DEF",
    xDCA3CC61 = "0xDCA3CC61",
    x1F418253 = "0x1F418253",
    x933E72C3 = "0x933E72C3",
    xF05AAEDD = "0xF05AAEDD",
    xC4872161 = "0xC4872161",
    xAA0678B2 = "0xAA0678B2",
    VehiclesEnginesCooling = "vehicles_engines_cooling",
    Scripted = "scripted",
    AmbienceWeather = "ambience_weather",
    x6F56A5DC = "0x6F56A5DC",
    VehiclesBoatsEngines = "vehicles_boats_engines",
    AmbienceInsects = "ambience_insects",
    AmbienceBirds = "ambience_birds",
    Radio = "radio",
    x52BA33D4 = "0x52BA33D4",
    x45EB536F = "0x45EB536F",
    FrontendRadio = "frontend_radio",
    x9B60B77E = "0x9B60B77E",
    x044986F4 = "0x044986F4",
    xF7954E76 = "0xF7954E76",
    CollisionsVehiclesGlass = "collisions_vehicles_glass",
    xEB0390D7 = "0xEB0390D7",
    x80722AAA = "0x80722AAA",
    Fire = "fire",
    Water = "water",
    Score = "score",
    Doors = "doors",
    x01E27C7E = "0x01E27C7E",
    xA95BF404 = "0xA95BF404",
    InteractiveMusic = "interactive_music",
    x9205C7A1 = "0x9205C7A1",
    xD3594A47 = "0xD3594A47",
    x20230050 = "0x20230050",
    xEA1277B9 = "0xEA1277B9",
    xF4908CAD = "0xF4908CAD",
    x05D22F30 = "0x05D22F30",
    x11034592 = "0x11034592",
    x1E51E02F = "0x1E51E02F",
    x6D867E97 = "0x6D867E97",
    x9C6A4771 = "0x9C6A4771",
    x6C742462 = "0x6C742462",
    AnimalsFootsteps = "animals_footsteps",
    x414231B5 = "0x414231B5",
    Melee = "melee",
    x992F6CB7 = "0x992F6CB7",
    x75FB2B65 = "0x75FB2B65",
    x368CC071 = "0x368CC071",
    xB2681B31 = "0xB2681B31",
    xB4C14B9C = "0xB4C14B9C",
    xE3FAF7D3 = "0xE3FAF7D3",
    xCD3365DE = "0xCD3365DE",
    x864AAAB9 = "0x864AAAB9",
    Weather = "weather",
    WeatherWind = "weather_wind",
    x4FFD9CA5 = "0x4FFD9CA5",
    xCB2382B4 = "0xCB2382B4",
    xBCE6F3E0 = "0xBCE6F3E0",
    x781669E6 = "0x781669E6",
    WeatherRain = "weather_rain",
    VehiclesTrain = "vehicles_train",
    xF1754C85 = "0xF1754C85",
    CollisionsCloth = "collisions_cloth",
    VehiclesPlanes = "vehicles_planes",
    VehiclesPlanesJet = "vehicles_planes_jet",
    xF4FABC2A = "0xF4FABC2A",
    x3EB27392 = "0x3EB27392",
    CollisionsLouder = "collisions_louder",
    xED39E59D = "0xED39E59D",
    x011F1827 = "0x011F1827",
    AmbienceMusic = "ambience_music",
    x85B8BFD4 = "0x85B8BFD4",
    xB421C2DC = "0xB421C2DC",
    VehiclesBoatsWater = "vehicles_boats_water",
    WaterSwimming = "water_swimming",
    x31A9A815 = "0x31A9A815",
    x3874EB6C = "0x3874EB6C",
    x85DBC375 = "0x85DBC375",
    xC7D71D61 = "0xC7D71D61",
    x2F34D6FC = "0x2F34D6FC",
    ScriptedAlarms = "scripted_alarms",
    WeatherRainHeavy = "weather_rain_heavy",
    x88EEAE72 = "0x88EEAE72",
    VehiclesHelisDistant = "vehicles_helis_distant",
    VehiclesPlanesProp = "vehicles_planes_prop",
    VehiclesPlanesClose = "vehicles_planes_close",
    xBC11E471 = "0xBC11E471",
    WaterOcean = "water_ocean",
    x25E385A7 = "0x25E385A7",
    VehiclesPlanesDistant = "vehicles_planes_distant",
    VehiclesEnginesStartup = "vehicles_engines_startup",
    xC701057A = "0xC701057A",
    FireLouder = "fire_louder",
    x0E212957 = "0x0E212957",
    Underwater = "underwater",
    VehiclesTrainCarriage = "vehicles_train_carriage",
    VehiclesTrainClack = "vehicles_train_clack",
    PedsWind = "peds_wind",
    VehiclesExtrasLoud = "vehicles_extras_loud",
    VehiclesWheelsLoud = "vehicles_wheels_loud",
    AmbienceIndustrial = "ambience_industrial",
    AmbienceSpeech = "ambience_speech",
    xF0E66096 = "0xF0E66096",
    x3A52AFA3 = "0x3A52AFA3",
    WaterRiver = "water_river",
    WeatherThunder = "weather_thunder",
    VehiclesBicycles = "vehicles_bicycles",
    VehiclesBicyclesMechanical = "vehicles_bicycles_mechanical",
    AmbienceGeneral = "ambience_general",
    AmbienceCollectables = "ambience_collectables",
    UnderwaterLoud = "underwater_loud",
    SpeechAmbient = "speech_ambient",
    SpeechScripted = "speech_scripted",
    SpeechPain = "speech_pain",
    SpeechBreathing = "speech_breathing",
    xBF162C33 = "0xBF162C33",
    xB9CB44C7 = "0xB9CB44C7",
    xDA38F55D = "0xDA38F55D",
    CollisionsGlass = "collisions_glass",
    WaterLoud = "water_loud",
    xF846B110 = "0xF846B110",
    x0D3C9D38 = "0x0D3C9D38",
    VehiclesTrainBrakes = "vehicles_train_brakes",
    xD2626419 = "0xD2626419",
    WeaponsExplosionsLoud = "weapons_explosions_loud",
    PedsCollisionsLoud = "peds_collisions_loud",
    x03D39751 = "0x03D39751",
    CollisionsScripted = "collisions_scripted",
    xE8C16DEA = "0xE8C16DEA",
    FrontendMenuLoud = "frontend_menu_loud",
    WeatherWindFoliage = "weather_wind_foliage",
    VehiclesPlanesExtras = "vehicles_planes_extras",
    x0BE5A8C0 = "0x0BE5A8C0",
    VehiclesCarBy = "vehicles_car_by",
    ScriptedTV = "scripted_tv",
    x02C7B342 = "0x02C7B342",
    x2BA33BE9 = "0x2BA33BE9",
    x9748F077 = "0x9748F077",
    DoorsLoud = "doors_loud",
    x0607FDB8 = "0x0607FDB8",
    ScriptedLouder = "scripted_louder",
    xA6A84701 = "0xA6A84701",
    x3C496EED = "0x3C496EED",
    VehiclesEnginesReflections = "vehicles_engines_reflections",
    WeatherRainProps = "weather_rain_props",
    UnderwaterSwimming = "underwater_swimming",
    x1FF21B89 = "0x1FF21B89",
    xA6DA13DC = "0xA6DA13DC",
    VehiclesEnginesLoud = "vehicles_engines_loud",
    x6A3DD9A1 = "0x6A3DD9A1",
    x53B27328 = "0x53B27328",
    UnderwaterMuted = "underwater_muted",
    x6805AAC2 = "0x6805AAC2",
    x8A91FE75 = "0x8A91FE75",
    xEB0865AB = "0xEB0865AB",
    xF3196F77 = "0xF3196F77",
    x05403EE1 = "0x05403EE1",
    x63614939 = "0x63614939",
    xBC72B5EB = "0xBC72B5EB",
    FrontendGameLoud = "frontend_game_loud",
    xF2C3426E = "0xF2C3426E",
    x639A44A4 = "0x639A44A4",
    x266E012E = "0x266E012E",
    xACA58232 = "0xACA58232",
    x7A6F1418 = "0x7A6F1418",
    xD4AE89CA = "0xD4AE89CA",
    xFDB42EDF = "0xFDB42EDF",
    xFF7A0598 = "0xFF7A0598",
    x5A6165D9 = "0x5A6165D9",
    x585863F0 = "0x585863F0",
    x0E4CF672 = "0x0E4CF672",
    x11D52176 = "0x11D52176",
    xF841C9F9 = "0xF841C9F9",
    x291E7FD7 = "0x291E7FD7",
    x94821026 = "0x94821026",
    xFB40B82B = "0xFB40B82B",
    xCFF0C1C2 = "0xCFF0C1C2"
}
export declare enum FileEncoding {
    Utf8 = "utf-8",
    Utf16 = "utf-16",
    Binary = "binary"
}
export declare enum Permission {
    NONE = 0,
    SCREEN_CAPTURE = 1,
    WEBRTC = 2,
    CLIPBOARD_ACCESS = 3,
    EXTENDED_VOICE_API = 4,
    All = 5
}
export declare enum CheckpointType {
    CylinderSingleArrow = 0,
    CylinderDoubleArrow = 1,
    CylinderTripleArrow = 2,
    CylinderCycleArrow = 3,
    CylinderCheckerboard = 4,
    CylinderWrench = 5,
    CylinderSingleArrow2 = 6,
    CylinderDoubleArrow2 = 7,
    CylinderTripleArrow2 = 8,
    CylinderCycleArrow2 = 9,
    CylinderCheckerboard2 = 10,
    CylinderWrench2 = 11,
    RingSingleArrow = 12,
    RingDoubleArrow = 13,
    RingTripleArrow = 14,
    RingCycleArrow = 15,
    RingCheckerboard = 16,
    SingleArrow = 17,
    DoubleArrow = 18,
    TripleArrow = 19,
    CycleArrow = 20,
    Checkerboard = 21,
    CylinderSingleArrow3 = 22,
    CylinderDoubleArrow3 = 23,
    CylinderTripleArrow3 = 24,
    CylinderCycleArrow3 = 25,
    CylinderCheckerboard3 = 26,
    CylinderSingleArrow4 = 27,
    CylinderDoubleArrow4 = 28,
    CylinderTripleArrow4 = 29,
    CylinderCycleArrow4 = 30,
    CylinderCheckerboard4 = 31,
    CylinderSingleArrow5 = 32,
    CylinderDoubleArrow5 = 33,
    CylinderTripleArrow5 = 34,
    CylinderCycleArrow5 = 35,
    CylinderCheckerboard5 = 36,
    RingPlaneUp = 37,
    RingPlaneLeft = 38,
    RingPlaneRight = 39,
    RingPlaneDown = 40,
    Empty = 41,
    Ring = 42,
    Empty2 = 43,
    Cylinder = 44,
    Cylinder1 = 45,
    Cylinder2 = 46,
    Cylinder3 = 47,
    Cylinder4 = 48,
    Cylinder5 = 49,
    Empty3 = 50,
    Empty4 = 51,
    Empty5 = 52,
    Empty6 = 53,
    RingDollar = 54,
    RingWolf = 55,
    RingQuestionMark = 56,
    RingPlane = 57,
    RingChopper = 58,
    RingBoat = 59,
    RingCar = 60,
    RingBike = 61,
    RingBicycle = 62,
    RingTruck = 63,
    RingParachute = 64,
    RingJetpack = 65,
    RingWhirl = 66
}
export declare enum ModelType {
    Invalid = 0,
    Ped = 1,
    Automobile = 2,
    Plane = 3,
    Trailer = 4,
    QuadBike = 5,
    SubmarineCar = 6,
    AmphibiousAutomobile = 7,
    AmphibiousQuadBike = 8,
    Heli = 9,
    Blimp = 10,
    Autogyro = 11,
    Bike = 12,
    Bmx = 13,
    Boat = 14,
    Train = 15,
    Submarine = 16,
    Object = 17
}
export declare enum KeyCode {
    Key0 = 48,
    Key1 = 49,
    Key2 = 50,
    Key3 = 51,
    Key4 = 52,
    Key5 = 53,
    Key6 = 54,
    Key7 = 55,
    Key8 = 56,
    Key9 = 57,
    Backspace = 8,
    Tab = 9,
    Clear = 12,
    Enter = 13,
    Return = 13,
    Escape = 27,
    Space = 32,
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40,
    Delete = 46,
    Insert = 45,
    Home = 36,
    End = 35,
    PageUp = 33,
    PageDown = 34,
    CapsLock = 20,
    Shift = 16,
    Alt = 18,
    Ctrl = 17,
    "-" = 189,
    "=" = 187,
    "," = 188,
    ";" = 186,
    "." = 190,
    "/" = 191,
    "`" = 192,
    "~" = 192,
    "'" = 222,
    "[" = 219,
    "]" = 221,
    "\\" = 220,
    KpMultiply = 106,
    KpAdd = 107,
    KpSubtract = 109,
    KpDecimal = 110,
    KpDivide = 111,
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,
    F13 = 124,
    F14 = 125,
    F15 = 126,
    F16 = 127,
    F17 = 128,
    F18 = 129,
    F19 = 130,
    F20 = 131,
    Numpad0 = 96,
    Numpad1 = 97,
    Numpad2 = 98,
    Numpad3 = 99,
    Numpad4 = 100,
    Numpad5 = 101,
    Numpad6 = 102,
    Numpad7 = 103,
    Numpad8 = 104,
    Numpad9 = 105,
    MouseLeft = 1,
    MouseRight = 2,
    MouseMiddle = 4
}
export declare enum BodyPart {
    Pelvis = 0,
    LeftHip = 1,
    LeftLeg = 2,
    LeftFoot = 3,
    RightHip = 4,
    RightLeg = 5,
    RightFoot = 6,
    LowerTorso = 7,
    UpperTorso = 8,
    Chest = 9,
    UnderNeck = 10,
    LeftShoulder = 11,
    LeftUpperArm = 12,
    LeftElbow = 13,
    LeftWrist = 14,
    RightShoulder = 15,
    RightUpperArm = 16,
    RightElbow = 17,
    RightWrist = 18,
    Neck = 19,
    Head = 20,
    Unknown = -1
}
export declare enum PedConfigFlag {
    NoCriticalHits = 2,
    DrownsInWater = 3,
    DisableReticuleFixedLockon = 4,
    UpperBodyDamageAnimsOnly = 7,
    NeverLeavesGroup = 13,
    BlockNonTemporaryEvents = 17,
    CanPunch = 18,
    IgnoreSeenMelee = 24,
    GetOutUndriveableVehicle = 29,
    CanFlyThruWindscreen = 32,
    DiesWhenRagdoll = 33,
    HasHelmet = 34,
    PutOnMotorcycleHelmet = 35,
    DontTakeOffHelmet = 36,
    DisableEvasiveDives = 39,
    DontInfluenceWantedLevel = 42,
    DisablePlayerLockon = 43,
    DisableLockonToRandomPeds = 44,
    AllowLockonToFriendlyPlayers = 45,
    BeingDeleted = 47,
    BlockWeaponSwitching = 48,
    NoCollision = 52,
    IsShooting = 58,
    WasShooting = 59,
    IsOnGround = 60,
    WasOnGround = 61,
    InVehicle = 62,
    OnMount = 63,
    AttachedToVehicle = 64,
    IsSwimming = 65,
    WasSwimming = 66,
    IsSkiing = 67,
    IsSitting = 68,
    KilledByStealth = 69,
    KilledByTakedown = 70,
    Knockedout = 71,
    IsSniperScopeActive = 72,
    SuperDead = 73,
    UsingCoverPoint = 75,
    IsInTheAir = 76,
    IsAimingGun = 78,
    ForcePedLoadCover = 93,
    VaultFromCover = 97,
    IsDrunk = 100,
    ForcedAim = 101,
    IsNotRagdollAndNotPlayingAnim = 104,
    ForceReload = 105,
    DontActivateRagdollFromVehicleImpact = 106,
    DontActivateRagdollFromBulletImpact = 107,
    DontActivateRagdollFromExplosions = 108,
    DontActivateRagdollFromFire = 109,
    DontActivateRagdollFromElectrocution = 110,
    KeepWeaponHolsteredUnlessFired = 113,
    GetOutBurningVehicle = 116,
    BumpedByPlayer = 117,
    RunFromFiresAndExplosions = 118,
    TreatAsPlayerDuringTargeting = 119,
    IsHandCuffed = 120,
    IsAnkleCuffed = 121,
    DisableMelee = 122,
    DisableUnarmedDrivebys = 123,
    JustGetsPulledOutWhenElectrocuted = 124,
    NmMessage466 = 125,
    WillNotHotwireLawEnforcementVehicle = 126,
    WillCommandeerRatherThanJack = 127,
    CanBeAgitated = 128,
    ForcePedToFaceLeftInCover = 129,
    ForcePedToFaceRightInCover = 130,
    BlockPedFromTurningInCover = 131,
    KeepRelationshipGroupAfterCleanUp = 132,
    ForcePedToBeDragged = 133,
    PreventPedFromReactingToBeingJacked = 134,
    IsScuba = 135,
    WillArrestRatherThanJack = 136,
    RemoveDeadExtraFarAway = 137,
    RidingTrain = 138,
    ArrestResult = 139,
    CanAttackFriendly = 140,
    WillJackAnyPlayer = 141,
    WillJackWantedPlayersRatherThanStealCar = 144,
    ShootingAnimFlag = 145,
    DisableLadderClimbing = 146,
    StairsDetected = 147,
    SlopeDetected = 148,
    CowerInsteadOfFlee = 150,
    CanActivateRagdollWhenVehicleUpsideDown = 151,
    AlwaysRespondToCriesForHelp = 152,
    DisableBloodPoolCreation = 153,
    ShouldFixIfNoCollision = 154,
    CanPerformArrest = 155,
    CanPerformUncuff = 156,
    CanBeArrested = 157,
    PlayerPreferFrontSeatMP = 159,
    IsInjured = 166,
    DontEnterVehiclesInPlayersGroup = 167,
    PreventAllMeleeTaunts = 169,
    IsInjured2 = 170,
    AlwaysSeeApproachingVehicles = 171,
    CanDiveAwayFromApproachingVehicles = 172,
    AllowPlayerToInterruptVehicleEntryExit = 173,
    OnlyAttackLawIfPlayerIsWanted = 174,
    PedsJackingMeDontGetIn = 177,
    PedIgnoresAnimInterruptEvents = 179,
    IsInCustody = 180,
    ForceStandardBumpReactionThresholds = 181,
    LawWillOnlyAttackIfPlayerIsWanted = 182,
    IsAgitated = 183,
    PreventAutoShuffleToDriversSeat = 184,
    UseKinematicModeWhenStationary = 185,
    EnableWeaponBlocking = 186,
    HasHurtStarted = 187,
    DisableHurt = 188,
    PlayerIsWeird = 189,
    DoNothingWhenOnFootByDefault = 193,
    UsingScenario = 194,
    VisibleOnScreen = 195,
    DontActivateRagdollOnVehicleCollisionWhenDead = 199,
    HasBeenInArmedCombat = 200,
    AvoidanceIgnoreAll = 202,
    AvoidanceIgnoredByAll = 203,
    AvoidanceIgnoreGroup1 = 204,
    AvoidanceMemberOfGroup1 = 205,
    ForcedToUseSpecificGroupSeatIndex = 206,
    DisableExplosionReactions = 208,
    DodgedPlayer = 209,
    WaitingForPlayerControlInterrupt = 210,
    ForcedToStayInCover = 211,
    GeneratesSoundEvents = 212,
    ListensToSoundEvents = 213,
    AllowToBeTargetedInAVehicle = 214,
    WaitForDirectEntryPointToBeFreeWhenExiting = 215,
    OnlyRequireOnePressToExitVehicle = 216,
    ForceExitToSkyDive = 217,
    DontEnterLeadersVehicle = 220,
    DisableExitToSkyDive = 221,
    Shrink = 223,
    MeleeCombat = 224,
    DisablePotentialToBeWalkedIntoResponse = 225,
    DisablePedAvoidance = 226,
    ForceRagdollUponDeath = 227,
    DisablePanicInVehicle = 229,
    AllowedToDetachTrailer = 230,
    IsHoldingProp = 236,
    BlocksPathingWhenDead = 237,
    ForceSkinCharacterCloth = 240,
    DisableStoppingVehicleEngine = 241,
    PhoneDisableTextingAnimations = 242,
    PhoneDisableTalkingAnimations = 243,
    PhoneDisableCameraAnimations = 244,
    DisableBlindFiringInShotReactions = 245,
    AllowNearbyCoverUsage = 246,
    CanPlayInCarIdles = 248,
    CanAttackNonWantedPlayerAsLaw = 249,
    WillTakeDamageWhenVehicleCrashes = 250,
    AICanDrivePlayerAsRearPassenger = 251,
    PlayerCanJackFriendlyPlayers = 252,
    IsOnStairs = 253,
    AIDriverAllowFriendlyPassengerSeatEntry = 255,
    AllowMissionPedToUseInjuredMovement = 257,
    PreventUsingLowerPrioritySeats = 261,
    DisableClosingVehicleDoor = 264,
    TeleportToLeaderVehicle = 268,
    AvoidanceIgnoreWeirdPedBuffer = 269,
    OnStairSlope = 270,
    DontBlipCop = 272,
    ClimbedShiftedFence = 273,
    KillWhenTrapped = 275,
    EdgeDetected = 276,
    AvoidTearGas = 279,
    NoWrithe = 281,
    OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
    DisableWeirdPedEvents = 285,
    ShouldChargeNow = 286,
    RagdollingOnBoat = 287,
    HasBrandishedWeapon = 288,
    FreezePosition = 292,
    DisableShockingEvents = 294,
    NeverReactToPedOnRoof = 296,
    DisableShockingDrivingOnPavementEvents = 299,
    DisablePedConstraints = 301,
    ForceInitialPeekInCover = 302,
    DisableJumpingFromVehiclesAfterLeader = 305,
    IsInCluster = 310,
    ShoutToGroupOnPlayerMelee = 311,
    IgnoredByAutoOpenDoors = 312,
    NoPedMelee = 314,
    CheckLoSForSoundEvents = 315,
    CanSayFollowedByPlayerAudio = 317,
    ActivateRagdollFromMinorPlayerContact = 318,
    ForcePoseCharacterCloth = 320,
    HasClothCollisionBounds = 321,
    HasHighHeels = 322,
    DontBehaveLikeLaw = 324,
    DisablePoliceInvestigatingBody = 326,
    DisableWritheShootFromGround = 327,
    LowerPriorityOfWarpSeats = 328,
    DisableTalkTo = 329,
    DontBlip = 330,
    IsSwitchingWeapon = 331,
    IgnoreLegIkRestrictions = 332,
    AllowTaskDoNothingTimeslicing = 339,
    NotAllowedToJackAnyPlayers = 342,
    AlwaysLeaveTrainUponArrival = 345,
    OnlyWritheFromWeaponDamage = 347,
    UseSloMoBloodVfx = 348,
    EquipJetpack = 349,
    PreventDraggedOutOfCarThreatResponse = 350,
    ForceDeepSurfaceCheck = 356,
    DisableDeepSurfaceAnims = 357,
    DontBlipNotSynced = 358,
    IsDuckingInVehicle = 359,
    PreventAutoShuffleToTurretSeat = 360,
    DisableEventInteriorStatusCheck = 361,
    HasReserveParachute = 362,
    UseReserveParachute = 363,
    TreatDislikeAsHateWhenInCombat = 364,
    OnlyUpdateTargetWantedIfSeen = 365,
    AllowAutoShuffleToDriversSeat = 366,
    PreventReactingToSilencedCloneBullets = 372,
    DisableInjuredCryForHelpEvents = 373,
    NeverLeaveTrain = 374,
    DontDropJetpackOnDeath = 375,
    DisableAutoEquipHelmetsInBikes = 380,
    IsClimbingLadder = 388,
    HasBareFeet = 389,
    GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
    BlockDroppingHealthSnacksOnDeath = 392,
    ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
    DontRespondToRandomPedsDamage = 395,
    AllowContinuousThreatResponseWantedLevelUpdates = 396,
    KeepTargetLossResponseOnCleanup = 397,
    PlayersDontDragMeOutOfCar = 398,
    BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
    IgnorePedTypeForIsFriendlyWith = 400,
    TreatNonFriendlyAsHateWhenInCombat = 401,
    DontLeaveVehicleIfLeaderNotInVehicle = 402,
    AllowMeleeReactionIfMeleeProofIsOn = 404,
    UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
    DisableHomingMissileLockForVehiclePedInside = 408,
    DisableTakeOffScubaGear = 409,
    Alpha = 410,
    LawPedsCanFleeFromNonWantedPlayer = 411,
    ForceBlipSecurityPedsIfPlayerIsWanted = 412,
    IsHolsteringWeapon = 413,
    UseGoToPointForScenarioNavigation = 414,
    DontClearLocalPassengersWantedLevel = 415,
    BlockAutoSwapOnWeaponPickups = 416,
    ThisPedIsATargetPriorityForAI = 417,
    IsSwitchingHelmetVisor = 418,
    ForceHelmetVisorSwitch = 419,
    FlamingFootprints = 421,
    DisableVehicleCombat = 422,
    DisablePropKnockOff = 423,
    FallsLikeAircraft = 424,
    UseLockpickVehicleEntryAnimations = 426,
    IgnoreInteriorCheckForSprinting = 427,
    SwatHeliSpawnWithinLastSpottedLocation = 428,
    DisableStartingVehicleEngine = 429,
    IgnoreBeingOnFire = 430,
    DisableTurretOrRearSeatPreference = 431,
    DisableWantedHelicopterSpawning = 432,
    UseTargetPerceptionForCreatingAimedAtEvents = 433,
    DisableHomingMissileLockon = 434,
    ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
    StayInDefensiveAreaWhenInVehicle = 436,
    DontShoutTargetPosition = 437,
    DisableHelmetArmor = 438,
    PreventVehExitDueToInvalidWeapon = 441,
    IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
    DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
    CheckLockedBeforeWarp = 444,
    DontShuffleInVehicleToMakeRoom = 445,
    GiveWeaponOnGetup = 446,
    DontHitVehicleWithProjectiles = 447,
    DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
    FiresDummyRockets = 449,
    IsArresting = 450,
    IsDecoyPed = 451,
    HasEstablishedDecoy = 452,
    BlockDispatchedHelicoptersFromLanding = 453,
    DontCryForHelpOnStun = 454,
    CanBeIncapacitated = 456,
    MutableForcedAim = 457,
    DontChangeTargetFromMelee = 458
}
export declare enum VoiceConnectionState {
    Disconnected = 0,
    Connecting = 1,
    Connected = 2
}
/**
   * Documentation: https://docs.altv.mp/articles/configs/resource.html
   */
export interface IResourceConfig {
    type: string;
    deps: readonly string[];
    main: string;
    "client-main": string;
    "client-type": string;
    "client-files": readonly string[];
    "required-permissions": readonly Permission[];
    "optional-permissions": readonly Permission[];
}
export type InterfaceValueByKey<TInterface, TKey, VDefault = unknown, VReplace = void> = (TKey extends keyof TInterface ? (VReplace extends void ? TInterface[TKey] : VReplace) : VDefault);
type ExtractStringKeys<TInterface extends Record<any, any>> = keyof {
    [K in keyof TInterface as Extract<K, string>]: TInterface[K];
};
export type EventParameters<TAltInterface extends Record<any, any>, TCustomInterface extends Record<any, any>, TEventName extends keyof TAltInterface | keyof TCustomInterface> = (Parameters<TEventName extends keyof TAltInterface ? TAltInterface[TEventName] : (TEventName extends keyof TCustomInterface ? TCustomInterface[TEventName] : never)>);
export type MetaValues<TInterface> = Partial<TInterface> & Record<string, unknown>;
export interface IVector2 {
    x: number;
    y: number;
}
export interface IVector3 {
    x: number;
    y: number;
    z: number;
}
export interface IQuaternion {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface IResource {
    name: string;
    type: string;
}
export interface IWeapon {
    hash: number;
    tintIndex: number;
    components: readonly number[];
}
export declare enum VehicleLockState {
    None = 0,
    Unlocked = 1,
    Locked = 2,
    LockoutPlayerOnly = 3,
    LockPlayerInside = 4,
    InitiallyLocked = 5,
    ForceDoorsShut = 6,
    LockedCanBeDamaged = 7
}
/**
   * Extend it by interface merging for use in global meta {@link getMeta alt.getMeta}, {@link setMeta alt.setMeta}, etc.
   *
   * @example
   * ```
   * declare module "alt-shared" {
   *   // extending interface by interface merging
   *   export interface ICustomGlobalMeta {
   *     numberExample: number
   *     stringExample: string
   *   }
   * }
   *
   * const value = alt.getMeta("numberExample") // return value: number | undefined
   * alt.setMeta("stringExample", "value") // key: "stringExample", value: string
   * ```
   */
export interface ICustomGlobalMeta {
}
/**
   * Extend it by interface merging for use in global synced meta {@link getSyncedMeta alt.getSyncedMeta}, {@link setSyncedMeta alt.setSyncedMeta}, etc.
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomGlobalSyncedMeta {
}
/**
   * Extend it by interface merging for use in baseobject meta {@link BaseObject#getMeta}, {@link BaseObject#setMeta}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomBaseObjectMeta {
}
/**
   * Extend it by interface merging for use in baseobject synced meta {@link BaseObject#getSyncedMeta}, {@link BaseObject#hasSyncedMeta}, etc.
   *
   * @remarks See {@link "alt-shared".ICustomGlobalMeta} for an example of use.
   */
export interface ICustomBaseObjectSyncedMeta {
}
/**
   * Extend it by interface merging for use in entity synced meta (class `Entity` on client & server, e.g. `entity.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomEntitySyncedMeta extends ICustomBaseObjectSyncedMeta {
}
/**
   * Extend it by interface merging for use in entity stream synced meta (class `Entity` on client & server, e.g. `entity.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomEntityStreamSyncedMeta {
}
/**
   * Extend it by interface merging for use in player synced meta (class `Player` on client & server, e.g. `player.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomPlayerSyncedMeta extends ICustomEntitySyncedMeta {
}
/**
   * Extend it by interface merging for use in player stream synced meta (class `Player` on client & server, e.g. `player.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomPlayerStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {
}
/**
   * Extend it by interface merging for use in player local meta (class `Player` on client & server, e.g. `player.getLocalMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomPlayerLocalMeta {
}
/**
   * Extend it by interface merging for use in vehicle synced meta (class `Vehicle` on client & server, e.g. `vehicle.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomVehicleSyncedMeta extends ICustomEntitySyncedMeta {
}
/**
   * Extend it by interface merging for use in vehicle stream synced meta (class `Vehicle` on client & server, e.g. `vehicle.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomVehicleStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {
}
/**
   * Extend it by interface merging for use in virtual entity stream synced meta (class `VirtualEntity` on client & server, e.g. `entity.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomVirtualEntityStreamSyncedMeta {
}
/**
   * Extend it by interface merging for use in ped synced meta (class `Ped` on client & server, e.g. `ped.getSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomPedSyncedMeta extends ICustomEntitySyncedMeta {
}
/**
   * Extend it by interface merging for use in ped stream synced meta (class `Ped` on client & server, e.g. `ped.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomPedStreamSyncedMeta extends ICustomEntityStreamSyncedMeta {
}
/**
   * Extend it by interface merging for use in checkpoint stream synced meta (class `Checkpoint` on client & server, e.g. `checkpoint.getStreamSyncedMeta`)
   *
   * @remarks See {@link ICustomGlobalMeta} for an example of use
   */
export interface ICustomCheckpointStreamSyncedMeta {
}
/**
   * Extend `alt.emitServer` and `alt.onServer` auto-completion by merging interfaces.
   *
   * @example
   * ```ts
   * declare module 'alt-client' {
   *    interface ICustomServerClientEvent {
   *        myEvent: (arg1: string, arg2: { key: string, value: number })
   *    }
   * }
   * ```
   *
   * @export
   * @interface ICustomServerClientEvent
   */
export interface ICustomServerClientEvent {
}
/**
   * Extend `alt.onClient` and `alt.emitServer` auto-completion by merging interfaces.
   *
   * @example
   * ```ts
   * declare module 'alt-client' {
   *    interface ICustomClientServerEvent {
   *        myEvent: (arg1: string, arg2: { key: string, value: number })
   *    }
   * }
   * ```
   *
   * @export
   * @interface ICustomClientServerEvent
   */
export interface ICustomClientServerEvent {
}
/**
   * Extend `player.emitRpc` and `alt.onRpc` auto-completion by merging interfaces.
   *
   * @example
   * ```ts
   * declare module 'alt-client' {
   *    interface ICustomServerClientRpc {
   *        myRpc: (arg1: string, arg2: { key: string, value: number }): Promise<boolean>
   *    }
   * }
   * ```
   *
   * @export
   * @interface ICustomServerClientRpc
   */
export interface ICustomServerClientRpc {
}
/**
   * Extend `alt.onRpc` and `alt.emitRpc` auto-completion by merging interfaces.
   *
   * @example
   * ```ts
   * declare module 'alt-client' {
   *    interface ICustomClientServerRpc {
   *        myRpc: (arg1: string, arg2: { key: string, value: number }): Promise<boolean>
   *    }
   * }
   * ```
   *
   * @export
   * @interface ICustomClientServerRpc
   */
export interface ICustomClientServerRpc {
}
export interface IInspectOptions {
    /**
     * If set to `true`, getters are going to be
     * inspected as well. If set to `'get'` only getters without setter are going
     * to be inspected. If set to `'set'` only getters having a corresponding
     * setter are going to be inspected. This might cause side effects depending on
     * the getter function.
     * @default `false`
     */
    getters: boolean | "get" | "set";
    showHidden: boolean;
    /**
     * @default 2
     */
    depth: number;
    colors: boolean;
    customInspect: boolean;
    maxArrayLength: number;
    /**
     * Specifies the maximum number of characters to
     * include when formatting. Set to `null` or `Infinity` to show all elements.
     * Set to `0` or negative to show no characters.
     * @default 10000
     */
    maxStringLength: number;
    breakLength: number;
    /**
     * Setting this to `false` causes each object key
     * to be displayed on a new line. It will also add new lines to text that is
     * longer than `breakLength`. If set to a number, the most `n` inner elements
     * are united on a single line as long as all properties fit into
     * `breakLength`. Short array elements are also grouped together. Note that no
     * text will be reduced below 16 characters, no matter the `breakLength` size.
     * For more information, see the example below.
     * @default `true`
     */
    compact: number | boolean;
    sorted: boolean | ((a: string, b: string) => number);
}
export declare const resourceName: string;
export declare const version: string;
export declare const sdkVersion: string;
export declare const branch: string;
export declare const debug: boolean;
export declare const defaultDimension: number;
export declare const globalDimension: number;
export declare const isClient: boolean;
export declare const isServer: boolean;
export declare function deleteMeta(key: string): void;
export declare function deleteMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): void;
export declare function getMeta<K extends string>(key: Exclude<K, keyof ICustomGlobalMeta>): unknown;
export declare function getMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): ICustomGlobalMeta[K] | undefined;
export declare function getMeta<V extends any>(key: string): V | undefined;
export declare function getMetaKeys(): readonly string[];
export declare function hasMeta(key: string): boolean;
export declare function hasMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K): boolean;
export declare function setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K>): void;
export declare function setMeta<K extends ExtractStringKeys<ICustomGlobalMeta>>(key: K, value: ICustomGlobalMeta[K]): void;
export declare function setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomGlobalMeta, K, V>): void;
export declare function getSyncedMeta<K extends string>(key: Exclude<K, keyof ICustomGlobalSyncedMeta>): unknown;
export declare function getSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): ICustomGlobalSyncedMeta[K] | undefined;
export declare function getSyncedMeta<V extends any>(key: string): V | undefined;
export declare function getSyncedMetaKeys(): readonly string[];
export declare function hasSyncedMeta(key: string): boolean;
export declare function hasSyncedMeta<K extends ExtractStringKeys<ICustomGlobalSyncedMeta>>(key: K): boolean;
export declare function clearEveryTick(id: number): void;
export declare function clearInterval(id: number): void;
export declare function clearNextTick(id: number): void;
export declare function clearTimeout(id: number): void;
export declare function clearTimer(id: number): void;
export declare function emit(eventName: string, ...args: any[]): void;
export declare function emitRaw(eventName: string, ...args: any[]): void;
export declare function everyTick(handler: (...args: any[]) => void): number;
export declare function hash(str: string): number;
export declare function hasResource(name: string): boolean;
export declare function log(arg: any, ...args: any[]): void;
export declare function logError(arg: any, ...args: any[]): void;
export declare function logWarning(arg: any, ...args: any[]): void;
export declare function logDebug(arg: any, ...args: any[]): void;
export declare function nextTick(handler: (...args: any[]) => void): number;
export declare function on(eventName: string, listener: (...args: any[]) => void): void;
export declare function on(listener: (eventName: string, ...args: any[]) => void): void;
export declare function once(eventName: string, listener: (...args: any[]) => void): void;
export declare function once(listener: (eventName: string, ...args: any[]) => void): void;
export declare function off(eventName: string, listener: (...args: any[]) => void): void;
export declare function off(listener: (eventName: string, ...args: any[]) => void): void;
export declare function setInterval(handler: (...args: any[]) => void, miliseconds: number): number;
export declare function setTimeout(handler: (...args: any[]) => void, miliseconds: number): number;
export declare function getAllResources(): readonly IResource[];
export declare function time(timerName: string): void;
export declare function time(): void;
export declare function timeEnd(timerName: string): void;
export declare function timeEnd(): void;
export declare function wait(timeout: number): Promise<void>;
export declare function waitFor(callback: () => boolean, timeout?: number): Promise<void>;
export declare function inspect(value: unknown, options?: IInspectOptions): string;
export declare function assert(assertion: unknown, message?: string): asserts assertion;
export declare function getEventListeners(eventName: string | null): readonly ((...args: any[]) => void)[];
export declare function stringToSHA256(string: string): string;
export declare function getVoiceConnectionState(): VoiceConnectionState;
export declare function getNetTime(): number;
export declare class Vector3 {
    constructor(x: number, y: number, z: number);
    constructor(arr: [number, number, number]);
    constructor(obj: IVector3);
    constructor(value: number);
    readonly x: number;
    readonly y: number;
    readonly z: number;
    get length(): number;
    /** (0, 0, 0) vector */
    static readonly zero: Vector3;
    /** (1, 1, 1) vector */
    static readonly one: Vector3;
    /** (0, 1, 0) vector */
    static readonly forward: Vector3;
    /** (0, -1, 0) vector */
    static readonly back: Vector3;
    /** (0, 0, 1) vector */
    static readonly up: Vector3;
    /** (0, 0, -1) vector */
    static readonly down: Vector3;
    /** (-1, 0, 0) vector */
    static readonly left: Vector3;
    /** (1, 0, 0) vector */
    static readonly right: Vector3;
    /** (-Infinity, -Infinity, -Infinity) vector */
    static readonly negativeInfinity: Vector3;
    /** (Infinity, Infinity, Infinity) vector */
    static readonly positiveInfinity: Vector3;
    /**
     * Returns [x, y, z] array.
     */
    toArray(): [number, number, number];
    toFixed(precision: number): Vector3;
    toString(): string;
    /**
     * Adds two vectors.
     */
    add(x: number, y: number, z: number): Vector3;
    /**
     * Adds a number to all vector axis.
     */
    add(value: number): Vector3;
    /**
     * Adds two vectors.
     */
    add(array: [number, number, number]): Vector3;
    /**
     * Subtracts two vectors.
     */
    sub(x: number, y: number, z: number): Vector3;
    /**
     * Subtracts a number from all vector axis.
     */
    sub(value: number): Vector3;
    /**
     * Subtracts two vectors.
     */
    sub(array: [number, number, number]): Vector3;
    /**
     * Divides two vectors.
     */
    div(x: number, y: number, z: number): Vector3;
    /**
     * Divides all vector axis by value.
     */
    div(value: number): Vector3;
    /**
     * Divides two vectors.
     */
    div(array: [number, number, number]): Vector3;
    /**
     * Calculates dot product between two vectors.
     */
    dot(x: number, y: number, z: number): number;
    /**
     * Calculates dot product between vector and a number.
     */
    dot(value: number): number;
    /**
     * Calculates dot product between two vectors.
     */
    dot(array: [number, number, number]): number;
    /**
     * Calculates cross product between two vectors.
     */
    cross(x: number, y: number, z: number): Vector3;
    /**
     * Calculates cross product between vector and a number.
     */
    cross(value: number): Vector3;
    /**
     * Calculates cross product between two vectors.
     */
    cross(array: [number, number, number]): Vector3;
    /**
     * Multiplies two vectors.
     */
    mul(x: number, y: number, z: number): Vector3;
    /**
     * Multiplies all vector axis by a number.
     */
    mul(value: number): Vector3;
    /**
     * Multiplies two vectors.
     */
    mul(array: [number, number, number]): Vector3;
    /**
     * Negates vector.
     */
    negative(): Vector3;
    inverse(): Vector3;
    /**
     * Normalizes vector.
     */
    normalize(): Vector3;
    /**
     * Calculates distance between vectors.
     */
    distanceTo(vector: IVector3): number;
    /**
     * Calculates squared distance between vectors.
     */
    distanceToSquared(vector: IVector3): number;
    /**
     * Calculates angle between to vectors (in radians).
     */
    angleTo(vector: IVector3): number;
    /**
     * Calculates angle between to vectors (in degrees).
     */
    angleToDegrees(vector: IVector3): number;
    /**
     * Converts degrees to radians.
     */
    toRadians(): Vector3;
    /**
     * Converts radians to degrees.
     */
    toDegrees(): Vector3;
    /**
     * Checks if distance between vectors is smaller or equal to range.
     */
    isInRange(vector: IVector3, range: number): boolean;
    /**
     * Interpolates vectors linearly.
     */
    lerp(vector: IVector3, ratio: number): Vector3;
}
export declare class Vector2 {
    constructor(x: number, y: number);
    constructor(arr: [number, number]);
    constructor(obj: IVector2);
    constructor(value: number);
    readonly x: number;
    readonly y: number;
    get length(): number;
    /** (0, 0) vector */
    static readonly zero: Vector2;
    /** (1, 1) vector */
    static readonly one: Vector2;
    /** (0, 1) vector */
    static readonly up: Vector2;
    /**  (0, -1) vector */
    static readonly down: Vector2;
    /** (-1, 0) vector */
    static readonly left: Vector2;
    /** (1, 0) vector */
    static readonly right: Vector2;
    /** (-Infinity, -Infinity) vector */
    static readonly negativeInfinity: Vector2;
    /** (Infinity, Infinity) vector */
    static readonly positiveInfinity: Vector2;
    /**
     * Returns [x, y] array.
     */
    toArray(): [number, number];
    toFixed(precision: number): Vector2;
    toString(): string;
    /**
     * Adds two vectors.
     */
    add(x: number, y: number): Vector2;
    /**
     * Adds a number to all vector axis.
     */
    add(value: number): Vector2;
    /**
     * Adds two vectors.
     */
    add(array: [number, number]): Vector2;
    /**
     * Subtracts two vectors.
     */
    sub(x: number, y: number): Vector2;
    /**
     * Subtracts a number from all vector axis.
     */
    sub(value: number): Vector2;
    /**
     * Subtracts two vectors.
     */
    sub(array: [number, number]): Vector2;
    /**
     * Divides two vectors.
     */
    div(x: number, y: number): Vector2;
    /**
     * Divides two vectors.
     */
    div(value: number): Vector2;
    /**
     * Divides two vectors.
     */
    div(array: [number, number]): Vector2;
    /**
     * Calculates dot product between two vectors.
     */
    dot(x: number, y: number): Vector2;
    /**
     * Calculates dot product between vector and a number.
     */
    dot(value: number): Vector2;
    /**
     * Calculates dot product between two vectors.
     */
    dot(array: [number, number]): Vector2;
    /**
     * Multiplies two vectors.
     */
    mul(x: number, y: number): Vector2;
    /**
     * Multiplies all vector axis by a number.
     */
    mul(value: number): Vector2;
    /**
     * Multiplies two vectors.
     */
    mul(array: [number, number]): Vector2;
    /**
     * Negates vector.
     */
    negative(): Vector2;
    inverse(): Vector2;
    /**
     * Normalizes vector.
     */
    normalize(): Vector2;
    /**
     * Calculates distance between vectors.
     */
    distanceTo(vector: IVector2): number;
    /**
     * Calculates squared distance between vectors.
     */
    distanceToSquared(vector: IVector2): number;
    /**
     * Calculates angle between to vectors (in radians).
     */
    angleTo(vector: IVector2): number;
    /**
     * Calculates angle between to vectors (in degrees).
     */
    angleToDegrees(vector: IVector2): number;
    /**
     * Converts degrees to radians.
     */
    toRadians(): Vector2;
    /**
     * Converts radians to degrees.
     */
    toDegrees(): Vector2;
    /**
     * Checks if distance between vectors is smaller or equal to range.
     */
    isInRange(vector: IVector2, range: number): boolean;
    /**
     * Interpolates vectors linearly.
     */
    lerp(vector: IVector2, ratio: number): Vector2;
}
export declare class Quaternion {
    constructor(x: number, y: number, z: number, w: number);
    constructor(arr: [number, number, number, number]);
    constructor(obj: IQuaternion);
    constructor(value: number);
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    /** (0, 0, 0, 0) quaternion */
    static readonly zero: Quaternion;
    /** (1, 1, 1, 1) quaternion */
    static readonly one: Quaternion;
    /**
     * Returns [x, y, z, w] array.
     */
    toArray(): [number, number, number, number];
    /**
     * Returns the Quaternion with trimed decimals
     * @param precision Precision to trim the values. Defaults to 4
     */
    toFixed(precision: number): Quaternion;
    toString(): string;
}
export declare class RGBA {
    constructor(r: number, g: number, b: number, a: number);
    constructor(array: [r: number, g: number, b: number, a?: number]);
    constructor(rgba: {
        r: number;
        g: number;
        b: number;
        a?: number;
    });
    static readonly red: RGBA;
    static readonly green: RGBA;
    static readonly blue: RGBA;
    static readonly black: RGBA;
    static readonly white: RGBA;
    static readonly clear: RGBA;
    /** r component of RGBA */
    r: number;
    /** g component of RGBA */
    g: number;
    /** b component of RGBA */
    b: number;
    /** a component of RGBA */
    a: number;
    toArray(): [r: number, g: number, b: number, a: number];
    toBGRA(): RGBA;
    toARGB(): RGBA;
    toInt(): number;
    toString(): string;
}
export declare class File {
    constructor();
    /**
     * Determines whether file exists with the specified filename.
     *
     * @param filename The name of the file.
     * @returns Return is dependent on whether file with the specified filename exists.
     */
    static exists(filename: string): boolean;
    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file. If not specified, it defaults to "utf-8".
     */
    read(filename: string, encoding?: FileEncoding.Utf8 | FileEncoding.Utf16 | "utf-8" | "utf-16"): string;
    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */
    static read(filename: string, encoding: FileEncoding.Utf8 | FileEncoding.Utf16 | "utf-8" | "utf-16" | FileEncoding.Binary | "binary"): string | ArrayBuffer;
}
export declare namespace Utils {
    function wait(timeout: number): Promise<void>;
    function waitFor(callback: () => boolean, timeout?: number): Promise<void>;
    function inspect(value: unknown, options?: import("alt-shared").IInspectOptions): string;
    function assert(assertion: unknown, message?: string): void;
    class Timer {
        constructor(callback: () => void, ms: number, once: boolean);
        readonly id: number;
        destroy(): void;
    }
    class Timeout extends Timer {
        constructor(callback: () => void, ms: number);
    }
    class Interval extends Timer {
        constructor(callback: () => void, ms: number);
    }
    class NextTick extends Timer {
        constructor(callback: () => void);
    }
    class EveryTick extends Timer {
        constructor(callback: () => void);
    }
    class ConsoleCommand {
        constructor(name: string, callback: (...args: string[]) => void);
        destroy(): void;
    }
}
export declare class BaseObject {
    constructor();
    /**
     * Type of the object.
     */
    readonly type: BaseObjectType;
    /**
     * Object usability.
     *
     * @returns False if object is no longer usable.
     */
    readonly valid: boolean;
    readonly id: number;
    /**
     * Returns the ref count of the entity.
     *
     * @remarks It's only available in debug-mode.
     */
    readonly refCount: number;
    /**
     * Removes the object from the world.
     */
    destroy(): void;
    /**
     * Removes the specified key and the data connected to that specific key.
     *
     * @param key The key of the value to remove.
     */
    deleteMeta(key: string): void;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getMeta<K extends string>(key: Exclude<K, never>): unknown;
    getMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K): ICustomBaseObjectMeta[K];
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True when element associated with the specified key is stored.
     */
    hasMeta(key: string): boolean;
    getMetaDataKeys(): readonly string[];
    /**
     * Stores the given value with the specified key.
     *
     * @remarks The given value will be shared locally.
     *
     * @param key The key of the value to store.
     * @param value The value to store.
     */
    setMeta<K extends string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, unknown, void>): void;
    setMeta<K extends ExtractStringKeys<ICustomBaseObjectMeta>>(key: K, value: ICustomBaseObjectMeta[K]): void;
    /** @deprecated See {@link ICustomBaseObjectMeta} */
    setMeta<V extends any, K extends string = string>(key: K, value: InterfaceValueByKey<ICustomBaseObjectMeta, K, V, void>): void;
    /**
     * Gets a value using the specified key.
     *
     * @param key The key of the value to get.
     * @returns Dynamic value associated with the specified key or undefined if no data is present.
     */
    getSyncedMeta<K extends string>(key: Exclude<K, never>): unknown;
    getSyncedMeta<K extends ExtractStringKeys<ICustomBaseObjectSyncedMeta>>(key: K): ICustomBaseObjectSyncedMeta[K];
    /**
     * Determines whether contains the specified key.
     *
     * @param key The key of the value to locate.
     * @returns True if the meta table contains any data at the specified key or False if not
     */
    hasSyncedMeta(key: string): boolean;
    getSyncedMetaKeys(): readonly string[];
}
export declare class Resource {
    constructor();
    readonly isStarted: boolean;
    readonly type: string;
    readonly name: string;
    readonly main: string;
    readonly exports: Record<string, any>;
    readonly dependencies: readonly string[];
    readonly dependants: readonly string[];
    readonly requiredPermissions: readonly Permission[];
    readonly optionalPermissions: readonly Permission[];
    readonly valid: boolean;
    readonly config: IResourceConfig;
    static readonly all: readonly Resource[];
    static readonly current: Resource;
    static getByName(name: string): Resource;
}
export declare class Utils {
    constructor();
}
export {};
