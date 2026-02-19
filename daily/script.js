// --- BANCO DE DADOS (HARDCODED) ---
const DATABASE = {
    grammar: [
{ q: "To Go (Simple Past)", options: ["Went", "Goed", "Gone"], correct: "Went" },
        { q: "To See (Simple Past)", options: ["Saw", "Seed", "Seen"], correct: "Saw" },
        { q: "To Buy (Simple Past)", options: ["Buyed", "Bought", "Brought"], correct: "Bought" },
        { q: "To Be (Simple Past - We)", options: ["Was", "Were", "Is"], correct: "Were" },
        { q: "To Speak (Simple Past)", options: ["Spoke", "Speaked", "Spoken"], correct: "Spoke" },
        { q: "To Take (Simple Past)", options: ["Taked", "Took", "Taken"], correct: "Took" },
        { q: "To Eat (Simple Past)", options: ["Ate", "Eated", "Eaten"], correct: "Ate" },
        { q: "To Drink (Simple Past)", options: ["Drank", "Drunk", "Drinked"], correct: "Drank" },
        { q: "To Fly (Simple Past)", options: ["Flew", "Flyed", "Flown"], correct: "Flew" },
        { q: "To Write (Simple Past)", options: ["Wrote", "Writed", "Written"], correct: "Wrote" },
        { q: "To Break (Simple Past)", options: ["Broke", "Breaked", "Broken"], correct: "Broke" },
        { q: "To Give (Simple Past)", options: ["Gave", "Gived", "Given"], correct: "Gave" },
        { q: "To Know (Simple Past)", options: ["Knew", "Knowed", "Known"], correct: "Knew" },
        { q: "To Drive (Simple Past)", options: ["Drove", "Drived", "Driven"], correct: "Drove" },
        { q: "To Sing (Simple Past)", options: ["Sang", "Singed", "Sung"], correct: "Sang" },
        { q: "To Become (Simple Past)", options: ["Became", "Becomed", "Become"], correct: "Became" },
        { q: "To Begin (Simple Past)", options: ["Began", "Beginned", "Begun"], correct: "Began" },
        { q: "To Bend (Simple Past)", options: ["Bent", "Bended", "Bond"], correct: "Bent" },
        { q: "To Bet (Simple Past)", options: ["Bet", "Betted", "Betten"], correct: "Bet" },
        { q: "To Bite (Simple Past)", options: ["Bit", "Bited", "Bitten"], correct: "Bit" },
        { q: "To Bleed (Simple Past)", options: ["Bled", "Bleeded", "Blood"], correct: "Bled" },
        { q: "To Blow (Simple Past)", options: ["Blew", "Blowed", "Blown"], correct: "Blew" },
        { q: "To Bring (Simple Past)", options: ["Brought", "Bringed", "Brang"], correct: "Brought" },
        { q: "To Build (Simple Past)", options: ["Built", "Builded", "Build"], correct: "Built" },
        { q: "To Burn (Simple Past)", options: ["Burnt/Burned", "Borne", "Burnen"], correct: "Burnt/Burned" }, 
        { q: "To Burst (Simple Past)", options: ["Burst", "Bursted", "Bursten"], correct: "Burst" },
        { q: "To Catch (Simple Past)", options: ["Caught", "Catched", "Cot"], correct: "Caught" },
        { q: "To Choose (Simple Past)", options: ["Chose", "Choosed", "Chosen"], correct: "Chose" },
        { q: "To Come (Simple Past)", options: ["Came", "Comed", "Come"], correct: "Came" },
        { q: "To Cost (Simple Past)", options: ["Cost", "Costed", "Costen"], correct: "Cost" },
        { q: "To Creep (Simple Past)", options: ["Crept", "Creeped", "Crop"], correct: "Crept" },
        { q: "To Cut (Simple Past)", options: ["Cut", "Cuted", "Cutten"], correct: "Cut" },
        { q: "To Deal (Simple Past)", options: ["Dealt", "Dealed", "Dole"], correct: "Dealt" },
        { q: "To Dig (Simple Past)", options: ["Dug", "Digged", "Diggen"], correct: "Dug" },
        { q: "To Do (Simple Past)", options: ["Did", "Doed", "Done"], correct: "Did" },
        { q: "To Draw (Simple Past)", options: ["Drew", "Drawed", "Drawn"], correct: "Drew" },
        { q: "To Dream (Simple Past)", options: ["Dreamt/Dreamed", "Droman", "Dreamen"], correct: "Dreamt/Dreamed" },
        { q: "To Fall (Simple Past)", options: ["Fell", "Falled", "Fallen"], correct: "Fell" },
        { q: "To Feed (Simple Past)", options: ["Fed", "Feeded", "Fod"], correct: "Fed" },
        { q: "To Feel (Simple Past)", options: ["Felt", "Feeled", "Folen"], correct: "Felt" },
        { q: "To Fight (Simple Past)", options: ["Fought", "Fighted", "Fighten"], correct: "Fought" },
        { q: "To Find (Simple Past)", options: ["Found", "Finded", "Fonden"], correct: "Found" },
        { q: "To Fit (Simple Past)", options: ["Fit/Fitted", "Fat", "Fitten"], correct: "Fit/Fitted" },
        { q: "To Flee (Simple Past)", options: ["Fled", "Fleed", "Flown"], correct: "Fled" },
        { q: "To Forbid (Simple Past)", options: ["Forbade", "Forbidded", "Forbidden"], correct: "Forbade" },
        { q: "To Forget (Simple Past)", options: ["Forgot", "Forgetted", "Forgotten"], correct: "Forgot" },
        { q: "To Forgive (Simple Past)", options: ["Forgave", "Forgived", "Forgiven"], correct: "Forgave" },
        { q: "To Freeze (Simple Past)", options: ["Froze", "Freezed", "Frozen"], correct: "Froze" },
        { q: "To Get (Simple Past)", options: ["Got", "Getted", "Gotten"], correct: "Got" },
        { q: "To Grow (Simple Past)", options: ["Grew", "Growed", "Grown"], correct: "Grew" },
        { q: "To Hang (Simple Past)", options: ["Hung/Hanged", "Hang", "Hangen"], correct: "Hung/Hanged" },
        { q: "To Have (Simple Past)", options: ["Had", "Haved", "Has"], correct: "Had" },
        { q: "To Hear (Simple Past)", options: ["Heard", "Heared", "Horen"], correct: "Heard" },
        { q: "To Hide (Simple Past)", options: ["Hid", "Hided", "Hidden"], correct: "Hid" },
        { q: "To Hit (Simple Past)", options: ["Hit", "Hitted", "Hitten"], correct: "Hit" },
        { q: "To Hold (Simple Past)", options: ["Held", "Holded", "Holden"], correct: "Held" },
        { q: "To Hurt (Simple Past)", options: ["Hurt", "Hurted", "Hurten"], correct: "Hurt" },
        { q: "To Keep (Simple Past)", options: ["Kept", "Keeped", "Kap"], correct: "Kept" },
        { q: "To Kneel (Simple Past)", options: ["Knelt/Kneeled", "Knolled", "Kneelen"], correct: "Knelt/Kneeled" },
        { q: "To Lay (Simple Past)", options: ["Laid", "Layed", "Lain"], correct: "Laid" },
        { q: "To Lead (Simple Past)", options: ["Led", "Leaded", "Laden"], correct: "Led" },
        { q: "To Learn (Simple Past)", options: ["Learnt/Learned", "Lorn", "Learnen"], correct: "Learnt/Learned" },
        { q: "To Leave (Simple Past)", options: ["Left", "Leaved", "Loven"], correct: "Left" },
        { q: "To Lend (Simple Past)", options: ["Lent", "Lended", "Land"], correct: "Lent" },
        { q: "To Let (Simple Past)", options: ["Let", "Letted", "Lot"], correct: "Let" },
        { q: "To Lie (Simple Past - Recline)", options: ["Lay", "Lied", "Lain"], correct: "Lay" },
        { q: "To Light (Simple Past)", options: ["Lit/Lighted", "Lote", "Liten"], correct: "Lit/Lighted" },
        { q: "To Lose (Simple Past)", options: ["Lost", "Losed", "Lossed"], correct: "Lost" },
        { q: "To Make (Simple Past)", options: ["Made", "Maked", "Maiden"], correct: "Made" },
        { q: "To Mean (Simple Past)", options: ["Meant", "Meaned", "Moan"], correct: "Meant" },
        { q: "To Meet (Simple Past)", options: ["Met", "Meeted", "Mitten"], correct: "Met" },
        { q: "To Mistake (Simple Past)", options: ["Mistook", "Mistaked", "Mistaken"], correct: "Mistook" },
        { q: "To Pay (Simple Past)", options: ["Paid", "Payed", "Payen"], correct: "Paid" },
        { q: "To Put (Simple Past)", options: ["Put", "Putted", "Pat"], correct: "Put" },
        { q: "To Quit (Simple Past)", options: ["Quit/Quitted", "Quitten", "Quat"], correct: "Quit/Quitted" },
        { q: "To Read (Simple Past)", options: ["Read", "Readed", "Redden"], correct: "Read" },
        { q: "To Ride (Simple Past)", options: ["Rode", "Rided", "Ridden"], correct: "Rode" },
        { q: "To Ring (Simple Past)", options: ["Rang", "Ringed", "Rung"], correct: "Rang" },
        { q: "To Rise (Simple Past)", options: ["Rose", "Rised", "Risen"], correct: "Rose" },
        { q: "To Run (Simple Past)", options: ["Ran", "Runned", "Run"], correct: "Ran" },
        { q: "To Say (Simple Past)", options: ["Said", "Sayed", "Sayen"], correct: "Said" },
        { q: "To Seek (Simple Past)", options: ["Sought", "Seeked", "Soken"], correct: "Sought" },
        { q: "To Sell (Simple Past)", options: ["Sold", "Selled", "Solen"], correct: "Sold" },
        { q: "To Send (Simple Past)", options: ["Sent", "Sended", "Sand"], correct: "Sent" },
        { q: "To Set (Simple Past)", options: ["Set", "Setted", "Sat"], correct: "Set" },
        { q: "To Shake (Simple Past)", options: ["Shook", "Shaked", "Shaken"], correct: "Shook" },
        { q: "To Shine (Simple Past)", options: ["Shone/Shined", "Shonen", "Shun"], correct: "Shone/Shined" },
        { q: "To Shoot (Simple Past)", options: ["Shot", "Shooted", "Shooten"], correct: "Shot" },
        { q: "To Show (Simple Past)", options: ["Showed", "Shew", "Shown"], correct: "Showed" },
        { q: "To Shrink (Simple Past)", options: ["Shrank", "Shrinked", "Shrunk"], correct: "Shrank" },
        { q: "To Shut (Simple Past)", options: ["Shut", "Shutted", "Shat"], correct: "Shut" },
        { q: "To Sing (Simple Past)", options: ["Sang", "Singed", "Sung"], correct: "Sang" },
        { q: "To Sink (Simple Past)", options: ["Sank", "Sinked", "Sunk"], correct: "Sank" },
        { q: "To Sit (Simple Past)", options: ["Sat", "Sitted", "Sate"], correct: "Sat" },
        { q: "To Sleep (Simple Past)", options: ["Slept", "Sleeped", "Slopt"], correct: "Slept" },
        { q: "To Slide (Simple Past)", options: ["Slid", "Slided", "Slidden"], correct: "Slid" },
        { q: "To Smell (Simple Past)", options: ["Smelt/Smelled", "Smollen", "Smellen"], correct: "Smelt/Smelled" },
        { q: "To Sow (Simple Past)", options: ["Sowed", "Sew", "Sown"], correct: "Sowed" },
        { q: "To Spell (Simple Past)", options: ["Spelt/Spelled", "Spol", "Spellen"], correct: "Spelt/Spelled" },
        { q: "To Spend (Simple Past)", options: ["Spent", "Spended", "Spon"], correct: "Spent" },
        { q: "To Spill (Simple Past)", options: ["Spilt/Spilled", "Spoll", "Spillen"], correct: "Spilt/Spilled" },
        { q: "To Spin (Simple Past)", options: ["Spun/Span", "Spinned", "Spinen"], correct: "Spun/Span" },
        { q: "To Spit (Simple Past)", options: ["Spat", "Spitted", "Sput"], correct: "Spat" },
        { q: "To Split (Simple Past)", options: ["Split", "Splitted", "Splat"], correct: "Split" },
        { q: "To Spoil (Simple Past)", options: ["Spoilt/Spoiled", "Spolen", "Spoilen"], correct: "Spoilt/Spoiled" },
        { q: "To Spread (Simple Past)", options: ["Spread", "Spreaded", "Sprod"], correct: "Spread" },
        { q: "To Spring (Simple Past)", options: ["Sprang", "Springed", "Sprung"], correct: "Sprang" },
        { q: "To Stand (Simple Past)", options: ["Stood", "Standed", "Stonden"], correct: "Stood" },
        { q: "To Steal (Simple Past)", options: ["Stole", "Stealed", "Stolen"], correct: "Stole" },
        { q: "To Stick (Simple Past)", options: ["Stuck", "Sticked", "Stack"], correct: "Stuck" },
        { q: "To Sting (Simple Past)", options: ["Stung", "Stinged", "Stang"], correct: "Stung" },
        { q: "To Stink (Simple Past)", options: ["Stank", "Stinked", "Stunk"], correct: "Stank" },
        { q: "To Strike (Simple Past)", options: ["Struck", "Striked", "Stricken"], correct: "Struck" },
        { q: "To Swear (Simple Past)", options: ["Swore", "Sweared", "Sworn"], correct: "Swore" },
        { q: "To Sweat (Simple Past)", options: ["Sweat/Sweated", "Swot", "Sweaten"], correct: "Sweat/Sweated" }
    ]
};
    listening: [
            { text: "Where is the library?", options: ["Where is the library?", "When is the library?", "Where is the liberty?"], correct: "Where is the library?" },
            { text: "I like to eat apples.", options: ["I like to eat apples.", "I'd like two apples.", "I like to heat apples."], correct: "I like to eat apples." },
            { text: "She is my best friend.", options: ["She is my best friend.", "She is my boyfriend.", "He is my best friend."], correct: "She is my best friend." },
            { text: "Can you help me?", options: ["Can you help me?", "Can you hear me?", "Can you hold me?"], correct: "Can you help me?" },
            { text: "It is sunny today.", options: ["It is sunny today.", "It is Sunday today.", "It is funny today."], correct: "It is sunny today." },
            { text: "Turn left at the corner.", options: ["Turn left at the corner.", "Turn right at the corner.", "Turn left at the corridor."], correct: "Turn left at the corner." },
            { text: "How much does it cost?", options: ["How much does it cost?", "How much is the cost?", "How much does it cast?"], correct: "How much does it cost?" },
            { text: "Nice to meet you.", options: ["Nice to meet you.", "Rice to meet you.", "Nice to meat you."], correct: "Nice to meet you." },
            { text: "Open the window please.", options: ["Open the window please.", "Open the winter please.", "Hope the window please."], correct: "Open the window please." },
            { text: "The cat is sleeping.", options: ["The cat is sleeping.", "The car is speeding.", "The bat is sleeping."], correct: "The cat is sleeping." },
            { text: "Where is the bathroom?", options: ["Where is the bathroom?", "Where is the bedroom?", "Where is the bad room?"], correct: "Where is the bathroom?" },
            { text: "My favorite color is blue.", options: ["My favorite color is blue.", "My favorite collar is blue.", "My favorite color is glue."], correct: "My favorite color is blue." },
            { text: "I am very hungry.", options: ["I am very hungry.", "I am very angry.", "I am very hurry."], correct: "I am very hungry." },
            { text: "He is washing the car.", options: ["He is washing the car.", "He is watching the car.", "He is washing the bar."], correct: "He is washing the car." },
            { text: "Do you have a pen?", options: ["Do you have a pen?", "Do you have a pan?", "Do you have a pin?"], correct: "Do you have a pen?" },
            { text: "I need to buy bread.", options: ["I need to buy bread.", "I need to buy red.", "I need to by bed."], correct: "I need to buy bread." },
            { text: "Look at that bird.", options: ["Look at that bird.", "Look at that board.", "Look at that beard."], correct: "Look at that bird." },
            { text: "She has a nice hat.", options: ["She has a nice hat.", "She has a nice cat.", "She has a nice hot."], correct: "She has a nice hat." },
            { text: "Please sit down.", options: ["Please sit down.", "Please seat down.", "Please see down."], correct: "Please sit down." },
            { text: "The ship is big.", options: ["The ship is big.", "The sheep is big.", "The chip is big."], correct: "The ship is big." },
            { text: "I hurt my knee.", options: ["I hurt my knee.", "I heard my knee.", "I hurt my key."], correct: "I hurt my knee." },
            { text: "Pass me the pepper.", options: ["Pass me the pepper.", "Pass me the paper.", "Pass me the piper."], correct: "Pass me the pepper." },
            { text: "Don't drop the glass.", options: ["Don't drop the glass.", "Don't drop the grass.", "Don't drop the class."], correct: "Don't drop the glass." },
            { text: "It is a long road.", options: ["It is a long road.", "It is a wrong road.", "It is a long load."], correct: "It is a long road." },
            { text: "I want to sleep.", options: ["I want to sleep.", "I want to slip.", "I want two sheep."], correct: "I want to sleep." },
            { text: "He is a bad man.", options: ["He is a bad man.", "He is a bed man.", "He is a bat man."], correct: "He is a bad man." },
            { text: "Open your eyes.", options: ["Open your eyes.", "Open your ice.", "Open your rise."], correct: "Open your eyes." },
            { text: "This is my fan.", options: ["This is my fan.", "This is my van.", "This is my fun."], correct: "This is my fan." },
            { text: "Wait for me.", options: ["Wait for me.", "Wet for me.", "Weight for me."], correct: "Wait for me." },
            { text: "I feel sick.", options: ["I feel sick.", "I feel thick.", "I fill sick."], correct: "I feel sick." },
            { text: "Check the price.", options: ["Check the price.", "Check the prize.", "Check the rice."], correct: "Check the price." },
            { text: "The soup is hot.", options: ["The soup is hot.", "The soap is hot.", "The super is hot."], correct: "The soup is hot." },
            { text: "I saw a bear.", options: ["I saw a bear.", "I saw a pear.", "I saw a beer."], correct: "I saw a bear." },
            { text: "Give me a hug.", options: ["Give me a hug.", "Give me a mug.", "Give me a rug."], correct: "Give me a hug." },
            { text: "Where is the map?", options: ["Where is the map?", "Where is the nap?", "Where is the mop?"], correct: "Where is the map?" },
            { text: "It's time to go.", options: ["It's time to go.", "It's dime to go.", "It's time to grow."], correct: "It's time to go." },
            { text: "Look at the moon.", options: ["Look at the moon.", "Look at the noon.", "Look at the spoon."], correct: "Look at the moon." },
            { text: "My foot hurts.", options: ["My foot hurts.", "My food hurts.", "My boot hurts."], correct: "My foot hurts." },
            { text: "Send a letter.", options: ["Send a letter.", "Send a ladder.", "Send a later."], correct: "Send a letter." },
            { text: "The water is cold.", options: ["The water is cold.", "The waiter is cold.", "The water is gold."], correct: "The water is cold." },
            { text: "I like that song.", options: ["I like that song.", "I like that sung.", "I like that son."], correct: "I like that song." },
            { text: "Wash your hands.", options: ["Wash your hands.", "Watch your hands.", "Wash your hens."], correct: "Wash your hands." },
            { text: "He works hard.", options: ["He works hard.", "He walks hard.", "He works heart."], correct: "He works hard." },
            { text: "The grass is green.", options: ["The grass is green.", "The glass is green.", "The gas is green."], correct: "The grass is green." },
            { text: "She is thin.", options: ["She is thin.", "She is tin.", "She is sin."], correct: "She is thin." },
            { text: "I need some air.", options: ["I need some air.", "I need some hair.", "I need some ear."], correct: "I need some air." },
            { text: "Hold my hand.", options: ["Hold my hand.", "Old my hand.", "Hold my end."], correct: "Hold my hand." },
            { text: "The light is on.", options: ["The light is on.", "The right is on.", "The night is on."], correct: "The light is on." },
            { text: "I lost my key.", options: ["I lost my key.", "I lost my knee.", "I lost my tea."], correct: "I lost my key." },
            { text: "Pay the bill.", options: ["Pay the bill.", "Pay the pill.", "Pay the bell."], correct: "Pay the bill." },
            { text: "See you later.", options: ["See you later.", "See you letter.", "Sea you later."], correct: "See you later." },
            { text: "Don't lie to me.", options: ["Don't lie to me.", "Don't lay to me.", "Don't light to me."], correct: "Don't lie to me." },
            { text: "The dog barked.", options: ["The dog barked.", "The dog parked.", "The dog marked."], correct: "The dog barked." },
            { text: "Is it far?", options: ["Is it far?", "Is it four?", "Is it for?"], correct: "Is it far?" },
            { text: "I will call you.", options: ["I will call you.", "I will cool you.", "I will kill you."], correct: "I will call you." },
            { text: "She loves red roses.", options: ["She loves red roses.", "She loves red noses.", "She loves red hoses."], correct: "She loves red roses." },
            { text: "Drink some milk.", options: ["Drink some milk.", "Drink some silk.", "Drink some mill."], correct: "Drink some milk." },
            { text: "I checked the mail.", options: ["I checked the mail.", "I checked the male.", "I checked the meal."], correct: "I checked the mail." },
            { text: "Tie your shoes.", options: ["Tie your shoes.", "Tie your choose.", "Time your shoes."], correct: "Tie your shoes." },
            { text: "Start the engine.", options: ["Start the engine.", "Start the ending.", "Start the angel."], correct: "Start the engine." },
            { text: "Don't be late.", options: ["Don't be late.", "Don't be let.", "Don't be laid."], correct: "Don't be late." },
            { text: "Where is the coast?", options: ["Where is the coast?", "Where is the ghost?", "Where is the toast?"], correct: "Where is the coast?" },
            { text: "I hate flies.", options: ["I hate flies.", "I ate flies.", "I hate fries."], correct: "I hate flies." },
            { text: "Clean the floor.", options: ["Clean the floor.", "Clean the flour.", "Clean the flower."], correct: "Clean the floor." },
            { text: "He hurt his ankle.", options: ["He hurt his ankle.", "He hurt his uncle.", "He heard his ankle."], correct: "He hurt his ankle." },
            { text: "I want a snack.", options: ["I want a snack.", "I want a snake.", "I want a smack."], correct: "I want a snack." },
            { text: "The wind is blowing.", options: ["The wind is blowing.", "The wing is blowing.", "The win is blowing."], correct: "The wind is blowing." },
            { text: "Fill the cup.", options: ["Fill the cup.", "Feel the cup.", "Fill the cap."], correct: "Fill the cup." },
            { text: "That is true.", options: ["That is true.", "That is through.", "That is threw."], correct: "That is true." },
            { text: "Nice hair.", options: ["Nice hair.", "Nice air.", "Nice heir."], correct: "Nice hair." },
            { text: "Buy a new bat.", options: ["Buy a new bat.", "Buy a new bet.", "Buy a new boat."], correct: "Buy a new bat." },
            { text: "I miss you.", options: ["I miss you.", "I mess you.", "I mice you."], correct: "I miss you." },
            { text: "It's a big hall.", options: ["It's a big hall.", "It's a big hole.", "It's a big whole."], correct: "It's a big hall." },
            { text: "Cook the meat.", options: ["Cook the meat.", "Cook the meet.", "Cool the meat."], correct: "Cook the meat." },
            { text: "Show me the way.", options: ["Show me the way.", "Show me the weigh.", "Show me the whey."], correct: "Show me the way." },
            { text: "Look at the star.", options: ["Look at the star.", "Look at the stair.", "Look at the start."], correct: "Look at the star." },
            { text: "I need a rest.", options: ["I need a rest.", "I need a west.", "I need a test."], correct: "I need a rest." },
            { text: "He won the race.", options: ["He won the race.", "He won the raise.", "He want the race."], correct: "He won the race." },
            { text: "Where is the bank?", options: ["Where is the bank?", "Where is the back?", "Where is the bag?"], correct: "Where is the bank?" },
            { text: "Don't fall down.", options: ["Don't fall down.", "Don't full down.", "Don't fail down."], correct: "Don't fall down." },
            { text: "I ride a bike.", options: ["I ride a bike.", "I write a bike.", "I right a bike."], correct: "I ride a bike." },
            { text: "Cut the cake.", options: ["Cut the cake.", "Cut the lake.", "Cat the cake."], correct: "Cut the cake." },
            { text: "Who is the boss?", options: ["Who is the boss?", "Who is the bus?", "Who is the base?"], correct: "Who is the boss?" },
            { text: "Read the book.", options: ["Read the book.", "Red the book.", "Rid the book."], correct: "Read the book." },
            { text: "The sky is blue.", options: ["The sky is blue.", "The spy is blue.", "The ski is blue."], correct: "The sky is blue." },
            { text: "Hear the sound.", options: ["Hear the sound.", "Here the sound.", "Ear the sound."], correct: "Hear the sound." },
            { text: "Pick up the phone.", options: ["Pick up the phone.", "Pick up the bone.", "Pick up the stone."], correct: "Pick up the phone." },
            { text: "It is very low.", options: ["It is very low.", "It is very slow.", "It is very row."], correct: "It is very low." },
            { text: "Close the gate.", options: ["Close the gate.", "Close the date.", "Clothes the gate."], correct: "Close the gate." },
            { text: "Are you mad?", options: ["Are you mad?", "Are you mud?", "Are you made?"], correct: "Are you mad?" },
            { text: "Where is the hut?", options: ["Where is the hut?", "Where is the hat?", "Where is the hot?"], correct: "Where is the hut?" },
            { text: "See the view.", options: ["See the view.", "See the few.", "Sea the view."], correct: "See the view." },
            { text: "He has a cold.", options: ["He has a cold.", "He has a code.", "He has a coat."], correct: "He has a cold." },
            { text: "Catch the ball.", options: ["Catch the ball.", "Catch the bowl.", "Catch the bull."], correct: "Catch the ball." },
            { text: "I saw a fox.", options: ["I saw a fox.", "I saw a box.", "I saw a fog."], correct: "I saw a fox." },
            { text: "Keep it safe.", options: ["Keep it safe.", "Keep it save.", "Keep it shave."], correct: "Keep it safe." },
            { text: "The room is dark.", options: ["The room is dark.", "The room is duck.", "The room is dock."], correct: "The room is dark." },
            { text: "Eat your peas.", options: ["Eat your peas.", "Eat your peace.", "Eat your bees."], correct: "Eat your peas." },
            { text: "Pay the tax.", options: ["Pay the tax.", "Pay the tacks.", "Pay the tags."], correct: "Pay the tax." },
            { text: "Use the soap.", options: ["Use the soap.", "Use the soup.", "Use the rope."], correct: "Use the soap." },
            { text: "Walk strictly.", options: ["Walk strictly.", "Work strictly.", "Walk street."], correct: "Walk strictly." },
            { text: "I hurt my thumb.", options: ["I hurt my thumb.", "I hurt my tongue.", "I hurt my tomb."], correct: "I hurt my thumb." },
            { text: "Is that a bear?", options: ["Is that a bear?", "Is that a bare?", "Is that a beer?"], correct: "Is that a bear?" },
            { text: "Sign your name.", options: ["Sign your name.", "Shine your name.", "Sine your name."], correct: "Sign your name." },
            { text: "Watch the clock.", options: ["Watch the clock.", "Watch the lock.", "Watch the cloak."], correct: "Watch the clock." },
            { text: "I like juice.", options: ["I like juice.", "I like use.", "I like jews."], correct: "I like juice." },
            { text: "Fix the roof.", options: ["Fix the roof.", "Fix the rough.", "Fix the root."], correct: "Fix the roof." },
            { text: "Where is the vet?", options: ["Where is the vet?", "Where is the bet?", "Where is the wet?"], correct: "Where is the vet?" },
            { text: "She is a nun.", options: ["She is a nun.", "She is a none.", "She is a noun."], correct: "She is a nun." },
            { text: "It is a fact.", options: ["It is a fact.", "It is a pact.", "It is effect."], correct: "It is a fact." },
            { text: "Don't shoot.", options: ["Don't shoot.", "Don't suit.", "Don't chute."], correct: "Don't shoot." },
            { text: "Bite the apple.", options: ["Bite the apple.", "Byte the apple.", "Buy the apple."], correct: "Bite the apple." },
            { text: "Drive the car.", options: ["Drive the car.", "Dive the car.", "Dry the car."], correct: "Drive the car." },
            { text: "Call the cop.", options: ["Call the cop.", "Call the cup.", "Call the cap."], correct: "Call the cop." },
            { text: "See the seal.", options: ["See the seal.", "See the sale.", "See the sail."], correct: "See the seal." }
        ],
    
    scramble: [
        { full: "My name is John", parts: ["John", "is", "name", "My"] },
        { full: "I love programming", parts: ["programming", "love", "I"] },
        { full: "The sky is blue", parts: ["blue", "is", "The", "sky"] },
        { full: "Do you like coffee", parts: ["coffee", "like", "you", "Do"] },
        { full: "It is time to go", parts: ["go", "to", "time", "is", "It"] },
        { full: "She works at a bank", parts: ["bank", "a", "at", "works", "She"] },
        { full: "We are learning English", parts: ["English", "learning", "are", "We"] },
        { full: "He plays football well", parts: ["well", "football", "plays", "He"] },
        { full: "They live in London", parts: ["London", "in", "live", "They"] },
        { full: "This is very easy", parts: ["easy", "very", "is", "This"] },
        { full: "The cat sleeps on the sofa", parts: ["sofa", "on", "sleeps", "the", "cat", "The"] },
        { full: "Where is the nearest station", parts: ["station", "nearest", "the", "is", "Where"] },
        { full: "I need a glass of water", parts: ["water", "of", "glass", "a", "need", "I"] },
        { full: "Please close the window", parts: ["window", "the", "close", "Please"] },
        { full: "Breakfast is ready now", parts: ["now", "ready", "is", "Breakfast"] },
        { full: "I like apple pie", parts: ["pie", "I", "apple", "like"] },
        { full: "She has a red car", parts: ["car", "has", "red", "She", "a"] },
        { full: "We play soccer on Sundays", parts: ["Sundays", "soccer", "on", "play", "We"] },
        { full: "The dog is barking", parts: ["is", "barking", "dog", "The"] },
        { full: "Can you help me", parts: ["me", "help", "you", "Can"] },
        { full: "He drinks coffee every morning", parts: ["morning", "coffee", "every", "drinks", "He"] },
        { full: "They are good friends", parts: ["friends", "good", "are", "They"] },
        { full: "Open the door please", parts: ["please", "door", "Open", "the"] },
        { full: "Where do you live", parts: ["live", "do", "you", "Where"] },
        { full: "My sister is a teacher", parts: ["teacher", "sister", "is", "a", "My"] },
        { full: "It is raining today", parts: ["today", "raining", "is", "It"] },
        { full: "I want to sleep", parts: ["sleep", "to", "want", "I"] },
        { full: "The cat is under the table", parts: ["table", "under", "is", "cat", "the", "The"] },
        { full: "We need more time", parts: ["time", "more", "need", "We"] },
        { full: "Are you hungry", parts: ["hungry", "you", "Are"] },
        { full: "She is reading a book", parts: ["book", "reading", "is", "a", "She"] },
        { full: "He runs very fast", parts: ["fast", "very", "runs", "He"] },
        { full: "This movie is boring", parts: ["boring", "is", "movie", "This"] },
        { full: "I love chocolate cake", parts: ["cake", "chocolate", "love", "I"] },
        { full: "Do not touch that", parts: ["that", "touch", "not", "Do"] },
        { full: "Summer is hot here", parts: ["here", "hot", "is", "Summer"] },
        { full: "I bought a new phone", parts: ["phone", "new", "a", "bought", "I"] },
        { full: "They went to the park", parts: ["park", "the", "to", "went", "They"] },
        { full: "What is your name", parts: ["name", "your", "is", "What"] },
        { full: "Please sit down", parts: ["down", "sit", "Please"] },
        { full: "The water is cold", parts: ["cold", "is", "water", "The"] },
        { full: "We watched TV all night", parts: ["night", "all", "TV", "watched", "We"] },
        { full: "She wears glasses", parts: ["glasses", "wears", "She"] },
        { full: "He lost his keys", parts: ["keys", "his", "lost", "He"] },
        { full: "Birds can fly", parts: ["fly", "can", "Birds"] },
        { full: "I am very tired", parts: ["tired", "very", "am", "I"] },
        { full: "Do you speak Spanish", parts: ["Spanish", "speak", "you", "Do"] },
        { full: "The baby is crying", parts: ["crying", "is", "baby", "The"] },
        { full: "Let us go home", parts: ["home", "go", "us", "Let"] },
        { full: "This is my house", parts: ["house", "my", "is", "This"] },
        { full: "I forgot my password", parts: ["password", "my", "forgot", "I"] },
        { full: "She dances beautifully", parts: ["beautifully", "dances", "She"] },
        { full: "He is fixing the car", parts: ["car", "the", "fixing", "is", "He"] },
        { full: "We enjoyed the party", parts: ["party", "the", "enjoyed", "We"] },
        { full: "Why are you sad", parts: ["sad", "you", "are", "Why"] },
        { full: "The train is late", parts: ["late", "is", "train", "The"] },
        { full: "I have two brothers", parts: ["brothers", "two", "have", "I"] },
        { full: "She cooks dinner", parts: ["dinner", "cooks", "She"] },
        { full: "He is my best friend", parts: ["friend", "best", "my", "is", "He"] },
        { full: "They play guitar", parts: ["guitar", "play", "They"] },
        { full: "Look at the stars", parts: ["stars", "the", "at", "Look"] },
        { full: "I need a vacation", parts: ["vacation", "a", "need", "I"] },
        { full: "Is it far from here", parts: ["here", "from", "far", "it", "Is"] },
        { full: "We study history", parts: ["history", "study", "We"] },
        { full: "The shop is closed", parts: ["closed", "is", "shop", "The"] },
        { full: "I like listening to music", parts: ["music", "to", "listening", "like", "I"] },
        { full: "She bought a dress", parts: ["dress", "a", "bought", "She"] },
        { full: "He drives a truck", parts: ["truck", "a", "drives", "He"] },
        { full: "They look happy", parts: ["happy", "look", "They"] },
        { full: "The food was delicious", parts: ["delicious", "was", "food", "The"] },
        { full: "I will call you later", parts: ["later", "you", "call", "will", "I"] },
        { full: "She is writing a letter", parts: ["letter", "a", "writing", "is", "She"] },
        { full: "He woke up early", parts: ["early", "up", "woke", "He"] },
        { full: "We are going to the beach", parts: ["beach", "the", "to", "going", "are", "We"] },
        { full: "What time is it", parts: ["it", "is", "time", "What"] },
        { full: "I prefer tea over coffee", parts: ["coffee", "over", "tea", "prefer", "I"] },
        { full: "She cleans her room", parts: ["room", "her", "cleans", "She"] },
        { full: "He works in an office", parts: ["office", "an", "in", "works", "He"] },
        { full: "They visited the museum", parts: ["museum", "the", "visited", "They"] },
        { full: "The flowers smell nice", parts: ["nice", "smell", "flowers", "The"] },
        { full: "I have a headache", parts: ["headache", "a", "have", "I"] },
        { full: "Did you see that", parts: ["that", "see", "you", "Did"] },
        { full: "We won the game", parts: ["game", "the", "won", "We"] },
        { full: "She sings very well", parts: ["well", "very", "sings", "She"] },
        { full: "He is watching a movie", parts: ["movie", "a", "watching", "is", "He"] },
        { full: "They built a house", parts: ["house", "a", "built", "They"] },
        { full: "The bus is coming", parts: ["coming", "is", "bus", "The"] },
        { full: "I am learning French", parts: ["French", "learning", "am", "I"] },
        { full: "She loves her job", parts: ["job", "her", "loves", "She"] },
        { full: "He painted the wall", parts: ["wall", "the", "painted", "He"] },
        { full: "We should eat healthy", parts: ["healthy", "eat", "should", "We"] },
        { full: "Where is my phone", parts: ["phone", "my", "is", "Where"] },
        { full: "The computer is broken", parts: ["broken", "is", "computer", "The"] },
        { full: "I miss my family", parts: ["family", "my", "miss", "I"] },
        { full: "She runs every day", parts: ["day", "every", "runs", "She"] },
        { full: "He is a smart boy", parts: ["boy", "smart", "a", "is", "He"] },
        { full: "They are dancing now", parts: ["now", "dancing", "are", "They"] },
        { full: "The sun shines bright", parts: ["bright", "shines", "sun", "The"] },
        { full: "I do not know", parts: ["know", "not", "do", "I"] },
        { full: "She made a cake", parts: ["cake", "a", "made", "She"] },
        { full: "He plays video games", parts: ["games", "video", "plays", "He"] },
        { full: "We travel every year", parts: ["year", "every", "travel", "We"] },
        { full: "Who is that man", parts: ["man", "that", "is", "Who"] },
        { full: "I finished my homework", parts: ["homework", "my", "finished", "I"] },
        { full: "She speaks softly", parts: ["softly", "speaks", "She"] },
        { full: "He is very tall", parts: ["tall", "very", "is", "He"] },
        { full: "They bought tickets", parts: ["tickets", "bought", "They"] },
        { full: "The moon is beautiful", parts: ["beautiful", "is", "moon", "The"] },
        { full: "I saw a ghost", parts: ["ghost", "a", "saw", "I"] },
        { full: "She loves animals", parts: ["animals", "loves", "She"] },
        { full: "He repaired the bike", parts: ["bike", "the", "repaired", "He"] },
        { full: "We are happy together", parts: ["together", "happy", "are", "We"] },
        { full: "Stay safe everyone", parts: ["everyone", "safe", "Stay"] },
        { full: "Life is a journey", parts: ["journey", "a", "is", "Life"] },
        { full: "Practice makes perfect", parts: ["perfect", "makes", "Practice"] }

    ]
};

// --- NOVA LÓGICA DE ROTAÇÃO SEM REPETIÇÃO ---

// 1. Data Base (Epoch)
// Conta quantos dias se passaram desde uma data fixa. Isso cria um índice linear (0, 1, 2, 3...)
const getEpochDay = () => {
    const start = new Date("2025-01-01").getTime(); // Data fixa de início
    const now = new Date().setHours(0, 0, 0, 0);
    return Math.floor((now - start) / (1000 * 60 * 60 * 24));
};

// 2. RNG Determinístico para Embaralhamento
// Gera números baseados em uma semente, garantindo que o embaralhamento seja igual para todos os usuários
const seededRandomGenerator = (seed) => {
    let localSeed = seed;
    return () => {
        localSeed = (localSeed * 9301 + 49297) % 233280;
        return localSeed / 233280;
    };
};

// 3. Gerador de Permutação do Ciclo
// Cria uma lista de índices embaralhados para o ciclo atual
// Ex: Se array tem 10 itens, no ciclo 0 pode retornar [2, 9, 1...], no ciclo 1 retorna [5, 0, 3...]
const getCyclicIndex = (arrayLength, seedOffset) => {
    const dayIndex = getEpochDay();
    
    // Qual ciclo estamos? (Ex: Dia 25 com array de 10 = Ciclo 2)
    const cycleNumber = Math.floor(dayIndex / arrayLength);
    
    // Qual posição dentro do ciclo? (Ex: Dia 25 com array de 10 = Posição 5)
    const positionInCycle = dayIndex % arrayLength;

    // Cria array de índices [0, 1, 2, ... length-1]
    let indices = Array.from({ length: arrayLength }, (_, i) => i);

    // Embaralha usando o número do ciclo como semente (+ offset para variar por categoria)
    const rng = seededRandomGenerator(cycleNumber + seedOffset);
    
    // Fisher-Yates Shuffle determinístico
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Retorna o índice correspondente ao dia de hoje
    return indices[positionInCycle];
};


// --- GERENCIADOR DE ÁUDIO ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (type) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    }
};

const speakText = (text) => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
};

// --- GERENCIAMENTO DE TEMA (DARK/LIGHT) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

const setTheme = (isDark) => {
    if (isDark) {
        document.body.setAttribute('data-theme', 'dark');
        iconSun.classList.remove('hidden');
        iconMoon.classList.add('hidden');
    } else {
        document.body.removeAttribute('data-theme');
        iconSun.classList.add('hidden');
        iconMoon.classList.remove('hidden');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

themeToggleBtn.onclick = () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
};

// --- LÓGICA DO JOGO ---

let dailyExercises = [];
let currentStep = 0;
let score = 0;
let currentAttempts = 0;

// Seleção de exercícios usando a nova lógica cíclica
const generateDailyChallenges = () => {
    // Offset garante que os ciclos de embaralhamento sejam diferentes para cada categoria
    // Se cycleNumber for 0, Grammar usa seed 0, Listening usa 100, Scramble usa 200
    const gIndex = getCyclicIndex(DATABASE.grammar.length, 0);
    const lIndex = getCyclicIndex(DATABASE.listening.length, 100);
    const sIndex = getCyclicIndex(DATABASE.scramble.length, 200);
    
    return [
        { type: 'grammar', data: DATABASE.grammar[gIndex] },
        { type: 'listening', data: DATABASE.listening[lIndex] },
        { type: 'scramble', data: DATABASE.scramble[sIndex] }
    ];
};

const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    locked: document.getElementById('locked-screen')
};

const ui = {
    progressBar: document.getElementById('progress-bar'),
    questionType: document.getElementById('question-type'),
    challengeDisplay: document.getElementById('challenge-display'),
    interactionArea: document.getElementById('interaction-area'),
    feedbackArea: document.getElementById('feedback-area'),
    feedbackText: document.getElementById('feedback-text'),
    nextBtn: document.getElementById('next-btn')
};

const init = () => {
    const lastPlayed = localStorage.getItem('lastPlayedDate');
    const todayStr = new Date().toISOString().slice(0, 10);
    const streak = localStorage.getItem('streak') || 0;
    document.getElementById('streak-display').innerText = `🔥 ${streak} dias seguidos`;

    if (lastPlayed === todayStr) {
        switchScreen('locked');
        startCountdown();
    } else {
        switchScreen('start');
        dailyExercises = generateDailyChallenges();
    }
};

const switchScreen = (screenName) => {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
};

const updateProgress = () => {
    const pct = ((currentStep) / 3) * 100;
    ui.progressBar.style.width = `${pct}%`;
};

const resetGame = () => {
    currentStep = 0;
    score = 0;
    ui.progressBar.style.width = '0%';
    renderGame();
};

const renderGame = () => {
    if (currentStep >= 3) {
        finishDailyChallenge();
        return;
    }

    currentAttempts = 0;
    const currentExercise = dailyExercises[currentStep];
    
    ui.feedbackArea.classList.add('hidden');
    ui.nextBtn.classList.add('hidden'); 
    ui.feedbackArea.className = 'feedback-area hidden';
    
    ui.interactionArea.innerHTML = '';
    ui.challengeDisplay.innerHTML = '';
    updateProgress();
    switchScreen('game');

    if (currentExercise.type === 'grammar') {
        renderGrammar(currentExercise.data);
    } else if (currentExercise.type === 'listening') {
        renderListening(currentExercise.data);
    } else if (currentExercise.type === 'scramble') {
        renderScramble(currentExercise.data);
    }
};

const renderGrammar = (data) => {
    ui.questionType.innerText = "Grammar Challenge";
    ui.challengeDisplay.innerHTML = `<div class="big-text">${data.q}</div>`;
    // Opções continuam aleatórias a cada renderização (para não fixar posição dos botões)
    const shuffledOptions = data.options.sort(() => Math.random() - 0.5); 
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.innerText = opt;
        btn.onclick = (e) => checkAnswer(opt === data.correct, data.correct, e.target);
        ui.interactionArea.appendChild(btn);
    });
};

const renderListening = (data) => {
    ui.questionType.innerText = "Listening Challenge";
    const btnListen = document.createElement('button');
    btnListen.className = 'listen-btn';
    btnListen.innerHTML = '🔊';
    btnListen.onclick = () => speakText(data.text);
    ui.challengeDisplay.appendChild(btnListen);
    setTimeout(() => speakText(data.text), 500);

    const shuffledOptions = data.options.sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.innerText = opt;
        btn.onclick = (e) => checkAnswer(opt === data.correct, data.correct, e.target);
        ui.interactionArea.appendChild(btn);
    });
};

const renderScramble = (data) => {
    ui.questionType.innerText = "Assemble the Sentence";
    const answerContainer = document.createElement('div');
    answerContainer.className = 'scramble-container';
    answerContainer.id = 'answer-slots';
    ui.challengeDisplay.appendChild(answerContainer);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'scramble-container';
    ui.interactionArea.appendChild(optionsContainer);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'btn btn-primary';
    checkBtn.innerText = "VERIFICAR";
    checkBtn.style.marginTop = "10px";
    checkBtn.onclick = (e) => {
        const currentSentence = Array.from(answerContainer.children).map(el => el.innerText).join(" ");
        checkAnswer(currentSentence === data.full, data.full, e.target);
    };
    ui.interactionArea.appendChild(checkBtn);

    // Palavras embaralhadas aleatoriamente para o exercício
    const rng = seededRandomGenerator(getEpochDay()); // Usa seed do dia para o embaralhamento das palavras ser consistente
    const parts = [...data.parts];
    // Fisher-Yates simples para as palavras
    for (let i = parts.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [parts[i], parts[j]] = [parts[j], parts[i]];
    }

    parts.forEach(word => {
        const span = document.createElement('span');
        span.className = 'word-block';
        span.innerText = word;
        span.onclick = function() {
            if (this.parentElement === optionsContainer) {
                answerContainer.appendChild(this);
            } else {
                optionsContainer.appendChild(this);
            }
        };
        optionsContainer.appendChild(span);
    });
};

const checkAnswer = (isCorrect, correctAnswerText, clickedElement) => {
    ui.feedbackArea.classList.remove('hidden');
    ui.feedbackArea.className = 'feedback-area';

    if (isCorrect) {
        disableAllInteractions();
        score++;
        playSound('correct');
        ui.feedbackArea.classList.add('feedback-correct');
        ui.feedbackText.innerText = "Excelente!";
        ui.nextBtn.classList.remove('hidden');
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } 
    else if (currentAttempts === 0) {
        currentAttempts++;
        playSound('wrong');
        
        const appContainer = document.querySelector('.app-container');
        appContainer.classList.add('shake');
        setTimeout(() => appContainer.classList.remove('shake'), 500);

        ui.feedbackArea.classList.add('feedback-warning');
        ui.feedbackText.innerText = "Quase lá! Tente mais uma vez.";
        
        if (clickedElement && clickedElement.tagName === 'BUTTON' && clickedElement.innerText !== 'VERIFICAR') {
            clickedElement.disabled = true;
            clickedElement.style.opacity = '0.5';
        }
    } 
    else {
        disableAllInteractions();
        playSound('wrong');
        ui.feedbackArea.classList.add('feedback-wrong');
        ui.feedbackText.innerText = `Resposta correta: ${correctAnswerText}`;
        ui.nextBtn.classList.remove('hidden');
    }

    ui.nextBtn.onclick = () => {
        currentStep++;
        renderGame();
    };
};

const disableAllInteractions = () => {
    const btns = ui.interactionArea.querySelectorAll('button, .word-block');
    btns.forEach(b => b.disabled = true);
};

const finishDailyChallenge = () => {
    switchScreen('result');
    document.getElementById('final-score').innerText = score;
    updateProgress(); 
    localStorage.setItem('lastPlayedDate', new Date().toISOString().slice(0, 10));
    
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastStreakDate = localStorage.getItem('lastStreakDate');

    if (lastStreakDate !== todayStr) {
        let currentStreak = parseInt(localStorage.getItem('streak') || 0);
        localStorage.setItem('streak', currentStreak + 1);
        localStorage.setItem('lastStreakDate', todayStr);
    }
    
    startCountdown();
};

const startCountdown = () => {
    const updateTimer = () => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const text = `${hours}h ${minutes}m ${seconds}s`;
        const els = document.querySelectorAll('.countdown');
        els.forEach(el => el.innerText = text);
    };
    updateTimer();
    setInterval(updateTimer, 1000);
};

// Listeners
document.getElementById('start-btn').onclick = () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    renderGame();
};
document.getElementById('retry-btn').onclick = resetGame;
document.getElementById('retry-locked-btn').onclick = () => {
    if (dailyExercises.length === 0) dailyExercises = generateDailyChallenges();
    resetGame();
};

init();
