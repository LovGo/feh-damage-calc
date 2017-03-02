// skill data
var skillInfo =
{
    "a" : {
        "Armored Blow 1" : {
            "initiate_mod" : {
                "def" : 2
            }
        },
        "Armored Blow 2" : {
            "initiate_mod" : {
                "def" : 4
            }
        },
        "Armored Blow 3" : {
            "initiate_mod" : {
                "def" : 6
            }
        },
        "Attack +1" : {
            "stat_mod" : {
                "atk" : 1
            }
        },
        "Attack +2" : {
            "stat_mod" : {
                "atk" : 2
            }
        },
        "Attack +3" : {
            "stat_mod" : {
                "atk" : 3
            }
        },
        "Close Counter" : {
            "counter" : true
        },
        "Darting Blow 1" : {
            "initiate_mod" : {
                "spd" : 2
            }
        },
        "Darting Blow 2" : {
            "initiate_mod" : {
                "spd" : 4
            }
        },
        "Darting Blow 3" : {
            "initiate_mod" : {
                "spd" : 6
            }
        },
        "Death Blow 1" : {
            "initiate_mod" : {
                "atk" : 2
            }
        },
        "Death Blow 2" : {
            "initiate_mod" : {
                "atk" : 4
            }
        },
        "Death Blow 3" : {
            "initiate_mod" : {
                "atk" : 6
            }
        },
        "Defense +1" : {
            "stat_mod" : {
                "def" : 1
            }
        },
        "Defense +2" : {
            "stat_mod" : {
                "def" : 2
            }
        },
        "Defense +3" : {
            "stat_mod" : {
                "def" : 3
            }
        },
        "Defiant Atk 1" : {
            "defiant" : {
                "atk" : 3
            }
        },
        "Defiant Atk 2" : {
            "defiant" : {
                "atk" : 5
            }
        },
        "Defiant Atk 3" : {
            "defiant" : {
                "atk" : 7
            }
        },
        "Defiant Def 1" : {
            "defiant" : {
                "def" : 3
            }
        },
        "Defiant Def 2" : {
            "defiant" : {
                "def" : 5
            }
        },
        "Defiant Def 3" : {
            "defiant" : {
                "def" : 7
            }
        },
        "Defiant Res 1" : {
            "defiant" : {
                "res" : 3
            }
        },
        "Defiant Res 2" : {
            "defiant" : {
                "res" : 5
            }
        },
        "Defiant Res 3" : {
            "defiant" : {
                "res" : 7
            }
        },
        "Defiant Spd 1" : {
            "defiant" : {
                "spd" : 3
            }
        },
        "Defiant Spd 2" : {
            "defiant" : {
                "spd" : 5
            }
        },
        "Defiant Spd 3" : {
            "defiant" : {
                "spd" : 7
            }
        },
        "Distant Counter" : {
            "counter" : true
        },
        "Fury 1" : {
            "stat_mod" : {
                "atk" : 1,
                "spd" : 1,
                "def" : 1,
                "res" : 1
            },
            "recoil_dmg" : 2
        },
        "Fury 2" : {
            "stat_mod" : {
                "atk" : 2,
                "spd" : 2,
                "def" : 2,
                "res" : 2
            },
            "recoil_dmg" : 4
        },
        "Fury 3" : {
            "stat_mod" : {
                "atk" : 3,
                "spd" : 3,
                "def" : 3,
                "res" : 3
            },
            "recoil_dmg" : 6
        },
        "HP +3" : {
            "stat_mod" : {
                "hp" : 3
            }
        },
        "HP +4" : {
            "stat_mod" : {
                "hp" : 4
            }
        },
        "HP +5" : {
            "stat_mod" : {
                "hp" : 5
            }
        },
        "Life and Death 1" : {
            "stat_mod" : {
                "atk" : 3,
                "spd" : 3,
                "def" : -3,
                "res" : -3
            }
        },
        "Life and Death 2" : {
            "stat_mod" : {
                "atk" : 4,
                "spd" : 4,
                "def" : -4,
                "res" : -4
            }
        },
        "Life and Death 3" : {
            "stat_mod" : {
                "atk" : 5,
                "spd" : 5,
                "def" : -5,
                "res" : -5
            }
        },
        "Resistance +1" : {
            "stat_mod" : {
                "res" : 1
            }
        },
        "Resistance +2" : {
            "stat_mod" : {
                "res" : 2
            }
        },
        "Resistance +3" : {
            "stat_mod" : {
                "res" : 3
            }
        },
        "Speed +1" : {
            "stat_mod" : {
                "spd" : 1
            }
        },
        "Speed +2" : {
            "stat_mod" : {
                "spd" : 2
            }
        },
        "Speed +3" : {
            "stat_mod" : {
                "spd" : 3
            }
        },
        "Svalinn Shield" : {
            "cancel_effective" : true
        },
        "Triangle Adept 1" : {
            "tri_advantage" : 0.1
        },
        "Triangle Adept 2" : {
            "tri_advantage" : 0.15
        },
        "Triangle Adept 3" : {
            "tri_advantage" : 0.2
        },
        "Warding Blow 1" : {
            "initiate_mod" : {
                "res" : 2
            }
        },
        "Warding Blow 2" : {
            "initiate_mod" : {
                "res" : 4
            }
        },
        "Warding Blow 3" : {
            "initiate_mod" : {
                "res" : 6
            }
        }
    },
    "b" : {
        "Axebreaker 1" : {
            "breaker" : {
                "weapon_type" : "Axe",
                "threshold" : 0.9
            }
        },
        "Axebreaker 2" : {
            "breaker" : {
                "weapon_type" : "Axe",
                "threshold" : 0.7
            }
        },
        "Axebreaker 3" : {
            "breaker" : {
                "weapon_type" : "Axe",
                "threshold" : 0.5
            }
        },
        "Bowbreaker 1" : {
            "breaker" : {
                "weapon_type" : "Bow",
                "threshold" : 0.9
            }
        },
        "Bowbreaker 2" : {
            "breaker" : {
                "weapon_type" : "Bow",
                "threshold" : 0.7
            }
        },
        "Bowbreaker 3" : {
            "breaker" : {
                "weapon_type" : "Bow",
                "threshold" : 0.7
            }
        },
        "B Tomebreaker 1" : {
            "breaker" : {
                "weapon_type" : "Blue Tome",
                "threshold" : 0.9
            }
        },
        "B Tomebreaker 2" : {
            "breaker" : {
                "weapon_type" : "Blue Tome",
                "threshold" : 0.7
            }
        },
        "B Tomebreaker 3" : {
            "breaker" : {
                "weapon_type" : "Blue Tome",
                "threshold" : 0.5
            }
        },
        "Brash Assault 1" : {
            "brash" : {
                "threshold" : 0.3
            }
        },
        "Brash Assault 2" : {
            "brash" : {
                "threshold" : 0.4
            }
        },
        "Brash Assault 3" : {
            "brash" : {
                "threshold" : 0.5
            }
        },
        "Daggerbreaker 1" : {
            "breaker" : {
                "weapon_type" : "Dagger",
                "threshold" : 0.9
            }
        },
        "Daggerbreaker 2" : {
            "breaker" : {
                "weapon_type" : "Dagger",
                "threshold" : 0.7
            }
        },
        "Daggerbreaker 3" : {
            "breaker" : {
                "weapon_type" : "Dagger",
                "threshold" : 0.5
            }
        },
        "Desperation 1" : {
            "desperation" : {
                "threshold" : 0.25
            }
        },
        "Desperation 2" : {
            "desperation" : {
                "threshold" : 0.5
            }
        },
        "Desperation 3" : {
            "desperation" : {
                "threshold" : 0.75
            }
        },
        "Drag Back" : {
        },
        "Escape Route 1" : {
        },
        "Escape Route 2" : {
        },
        "Escape Route 3" : {
        },
        "G Tomebreaker 1" : {
            "breaker" : {
                "weapon_type" : "Green Tome",
                "threshold" : 0.9
            }
        },
        "G Tomebreaker 2" : {
            "breaker" : {
                "weapon_type" : "Green Tome",
                "threshold" : 0.7
            }
        },
        "G Tomebreaker 3" : {
            "breaker" : {
                "weapon_type" : "Green Tome",
                "threshold" : 0.5
            }
        },
        "Knock Back" : {
        },
        "Lancebreaker 1" : {
            "breaker" : {
                "weapon_type" : "Lance",
                "threshold" : 0.9
            }
        },
        "Lancebreaker 2" : {
            "breaker" : {
                "weapon_type" : "Lance",
                "threshold" : 0.7
            }
        },
        "Lancebreaker 3" : {
            "breaker" : {
                "weapon_type" : "Lance",
                "threshold" : 0.5
            }
        },
        "Live to Serve 1" : {
        },
        "Live to Serve 2" : {
        },
        "Live to Serve 3" : {
        },
        "Lunge" : {
        },
        "Obstruct 1" : {
        },
        "Obstruct 2" : {
        },
        "Obstruct 3" : {
        },
        "Pass 1" : {
        },
        "Pass 2" : {
        },
        "Pass 3" : {
        },
        "Poison Strike 1" : {
            "poison" : 4
        },
        "Poison Strike 2" : {
            "poison" : 7
        },
        "Poison Strike 3" : {
            "poison" : 10
        },
        "Quick Riposte 1" : {
            "riposte" : {
                "threshold" : 0.9
            }
        },
        "Quick Riposte 2" : {
            "riposte" : {
                "threshold" : 0.7
            }
        },
        "Quick Riposte 3" : {
            "riposte" : {
                "threshold" : 0.5
            }
        },
        "R Tomebreaker 1" : {
            "breaker" : {
                "weapon_type" : "Red Tome",
                "threshold" : 0.9
            }
        },
        "R Tomebreaker 2" : {
            "breaker" : {
                "weapon_type" : "Red Tome",
                "threshold" : 0.7
            }
        },
        "R Tomebreaker 3" : {
            "breaker" : {
                "weapon_type" : "Red Tome",
                "threshold" : 0.5
            }
        },
        "Renewal 1" : {
            "heal" : {
                "amount" : 10,
                "turn_counter" : 4
            }
        },
        "Renewal 2" : {
            "heal" : {
                "amount" : 10,
                "turn_counter" : 3
            }
        },
        "Renewal 3" : {
            "heal" : {
                "amount" : 10,
                "turn_counter" : 2
            }
        },
        "Seal Atk 1" : {
            "seal" : {
                "atk" : -3
            }
        },
        "Seal Atk 2" : {
            "seal" : {
                "atk" : -5
            }
        },
        "Seal Atk 3" : {
            "seal" : {
                "atk" : -7
            }
        },
        "Seal Def 1" : {
            "seal" : {
                "def" : -3
            }
        },
        "Seal Def 2" : {
            "seal" : {
                "def" : -5
            }

        },
        "Seal Def 3" : {
            "seal" : {
                "def" : -7
            }
        },
        "Seal Res 1" : {
            "seal" : {
                "res" : -3
            }
        },
        "Seal Res 2" : {
            "seal" : {
                "res" : -5
            }
        },
        "Seal Res 3" : {
            "seal" : {
                "res" : -7
            }
        },
        "Seal Spd 1" : {
            "seal" : {
                "spd" : -3
            }
        },
        "Seal Spd 2" : {
            "seal" : {
                "spd" : -5
            }
        },
        "Seal Spd 3" : {
            "seal" : {
                "spd" : -7
            }
        },
        "Swordbreaker 1" : {
            "breaker" : {
                "weapon_type" : "Sword",
                "threshold" : 0.9
            }
        },
        "Swordbreaker 2" : {
            "breaker" : {
                "weapon_type" : "Sword",
                "threshold" : 0.7
            }
        },
        "Swordbreaker 3" : {
            "breaker" : {
                "weapon_type" : "Sword",
                "threshold" : 0.5
            }
        },
        "Vantage 1" : {
            "vantage" : {
                "threshold" : 0.25
            }
        },
        "Vantage 2" : {
            "vantage" : {
                "threshold" : 0.5
            }
        },
        "Vantage 3" : {
            "vantage" : {
                "threshold" : 0.75
            }
        },
        "Wary Fighter 1" : {
            "wary" : {
                "threshold" : 0.9
            }
        },
        "Wary Fighter 2" : {
            "wary" : {
                "threshold" : 0.7
            }
        },
        "Wary Fighter 3" : {
            "wary" : {
                "threshold" : 0.5
            }
        },
        "Wings of Mercy 1" : {
        },
        "Wings of Mercy 2" : {
        },
        "Wings of Mercy 3" : {
        }
    },
    "c" : {
        "Breath of Life 1" : {
        },
        "Breath of Life 2" : {
        },
        "Breath of Life 3" : {
        },
        "Fortify Def 1" : {
        },
        "Fortify Def 2" : {
        },
        "Fortify Def 3" : {
        },
        "Fortify Res 1" : {
        },
        "Fortify Res 2" : {
        },
        "Fortify Res 3" : {
        },
        "Fortify Armor" : {
        },
        "Fortify Cavalry" : {
        },
        "Fortify Fliers" : {
        },
        "Goad Armor" : {
        },
        "Goad Cavalry" : {
        },
        "Goad Fliers" : {
        },
        "Hone Atk 1" : {
        },
        "Hone Atk 2" : {
        },
        "Hone Atk 3" : {
        },
        "Hone Spd 1" : {
        },
        "Hone Spd 2" : {
        },
        "Hone Spd 3" : {
        },
        "Hone Armor" : {
        },
        "Hone Cavalry" : {
        },
        "Hone Fliers" : {
        },
        "Savage Blow 1" : {
        },
        "Savage Blow 2" : {
        },
        "Savage Blow 3" : {
        },
        "Spur Atk 1" : {
        },
        "Spur Atk 2" : {
        },
        "Spur Atk 3" : {
        },
        "Spur Def 1" : {
        },
        "Spur Def 2" : {
        },
        "Spur Def 3" : {
        },
        "Spur Res 1" : {
        },
        "Spur Res 2" : {
        },
        "Spur Res 3" : {
        },
        "Spur Spd 1" : {
        },
        "Spur Spd 2" : {
        },
        "Spur Spd 3" : {
        },
        "Threaten Atk 1" : {
            "threaten" : {
                "atk" : -3
            }
        },
        "Threaten Atk 2" : {
            "threaten" : {
                "atk" : -4
            }
        },
        "Threaten Atk 3" : {
            "threaten" : {
                "atk" : -5
            }
        },
        "Threaten Def 1" : {
            "threaten" : {
                "def" : -3
            }
        },
        "Threaten Def 2" : {
            "threaten" : {
                "def" : -4
            }
        },
        "Threaten Def 3" : {
            "threaten" : {
                "def" : -5
            }
        },
        "Threaten Res 1" : {
            "threaten" : {
                "res" : -3
            }
        },
        "Threaten Res 2" : {
            "threaten" : {
                "res" : -4
            }
        },
        "Threaten Res 3" : {
            "threaten" : {
                "res" : -5
            }
        },
        "Threaten Spd 1" : {
            "threaten" : {
                "spd" : -3
            }
        },
        "Threaten Spd 2" : {
            "threaten" : {
                "res" : -4
            }
        },
        "Threaten Spd 3" : {
            "threaten" : {
                "res" : -5
            }
        },
        "Ward Armor" : {
        },
        "Ward Cavalry" : {
        },
        "Ward Fliers" : {
        }
    }
};