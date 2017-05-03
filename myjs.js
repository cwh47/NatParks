//saguaro hover
$("#saguaro").on("mouseover", function () {
    $("#saguaroLines").css('display', 'inline');
});
$("#saguaro").on("mouseout", function () {
    $("#saguaroLines").css('display', 'none');
});
//haleakala hover
$("#haleakala").on("mouseover", function () {
    $("#haleakalaLines").css('display', 'inline');
});
$("#haleakala").on("mouseout", function () {
    $("#haleakalaLines").css('display', 'none');
});
//everglades hover
$("#everglades").on("mouseover", function () {
    $("#evergladesLines").css('display', 'inline');
});
$("#everglades").on("mouseout", function () {
    $("#evergladesLines").css('display', 'none');
});


/*WORKING CODE MODAL*/
//SAGUARO MODAL 
$("#saguaro").on("click", function () {
    $("#box").html(ans.laura.name);
});
$("#saguaro").on("click", function () {
    $("#box").css('display', 'inline');
});
$("#saguaro").on("click", function () {
    $("#overlay").css('display', 'inline');
});

//DATA
var ans = {
    laura: {
        name: "Laura"
        , question1: "Saguaro National Park"
        , question2: "The thousand colors of the sunset hitting the saguaro cacti and the uniqueness of the desert environment!"
        , question3: "This one time my friend and I thought we were following the trail but actually we were following a wash, and when we got to the end we didn't know where we were. We didn't have a trail map or anything. It's weird but I really liked that moment of working together to find the way back, and we got to see parts of the park we wouldn't have otherwise."
        , question4: "Hug a cactus! Just kidding. Go to the Arizona-Sonora Desert Museum and interact with cool wildlife!"
        , question5: "I'm a desert tortoise because then I can eat all of the tuna fruit off the cacti and be safe inside my shell. Or a quail because I love quails. Or a saguaro cactus because then I'm optimized for the desert and also protected by the law."
        , question6: "Super spiny saguaros? Devastatingly-beautiful dry desert diversity."
        , question7: "Parks and protected areas are reminders of what our home really is. Without them, every city will blend together until we forget where we are and who we are. Parks provide refuge not only for plants and animals, but also for humans who need to breathe clean air to be alive."
    }
    , rori: {
        name: "Rori"
        , question1: "Everglades National Park"
        , question2: "As much as I hated it at the time, every year, when I was little I would visit the Everglades on school field trips."
        , question3: "“In 11th grade, I took an AP environmental science class, and yet again, we visited the everglades. We didn’t have to wear our uniforms, which was kind of a big deal, and we got our own private airboat ride (*hair flip*). After the blowout of my lifetime (get it? cause, airboats.), we were given a tour of an Native American reservation, which was awesome, and we got to hold baby animals. I held the alligator and against my better judgement I also kissed it on it's snout. That wasn't a good idea. "
        , question4: "You HAVE to take an airboat ride. My advice: wear loose fitting clothes. It's hot AF out there. Also, the tour guides know so much about the environment and show you cool tips and tricks about the landscape– like sawgrass actually has a toothed edge, which, now that I think of it is also kind of self-explanatory, but whatever. "
        , question5: "I think I'd like to wake up as an alligator, I know, great choice, right? haha. I think I'd make a great alligator. All they do during the day is lay and do nothing and soak up the sun, then at night they swim and eat. Sounds like the life to me. "
        , question6: "Unique. Vast. Underrated."
        , question7: "We NEED to protect our national parks to preserve our history and the environment. National Parks contain some of the greatest landscapes the world has to offer and without them, we would lose not only landscapes, but also pieces of history."
    }
    , chuck: {
        name: "Chuck"
        , question1: "Zion National Park"
        , question2: "Full disclosure I thought about picking Grand Canyon. The ability to see sunrise, hike, and then sunset is pretty cool. But less of that and more of Zion! The whole park is in the middle of the most picturesque valley I have seen. From the moment we drove into the east entrance of the park, I was super jealous of my passengers. They got to look around and I had to pretend to focus on keeping them safe.There is a ton of hiking in the park. Since we were trying to see multiple parks, we only did two hikes: The Narrows and Angel's Landing. I could spend a couple weeks here hiking. There seems to be a huge variety and definitely something for every skill level. Pro tip: The only drawback about Utah is the 3.2% beer laws! Good thing we were road tripping from better and wetter states."
        , question3: "For our entire road trip through the Parks in Arizona and Utah, we were always a little wary of Angel's Landing. We knew it was beautiful, but also dangerous. Multiple people have died there over the years. It kept coming up in random conversations wherever we would be camping. That probably just added to the hype, though! Climbing Angel's with really good friends will be an experience that will stick with me forever. We were definitely nervous, but never felt unsafe. There are sturdy chains almost the whole way. I loved seeing our group look after each other all the way up and down the exposed sections. The views from the top were worth it times a thousand! "
        , question4: "Angel's Landing. Best views, great challenge, and good vibes everywhere!"
        , question5: "Chee bonus hour! I feel like this is cheating, but I'm a bird. We only got to do two major hikes during our time in Zion so being a bird would be extra clutch. There is a tram that makes about 10 stops throughout the park and it gives you an awesome sense of just how much there is to do there. I'd definitely spend some time in the narrows to laugh at everyone trying to hike thru the river, especially the fools who think they don't need waterproof shoes and a hiking stick (Mahalo to the crew for convincing me not to be an idiot). Plus I could perch up on Angel's Landing in the early morning to watch the whole valley wake up!"
        , question6: "Iron. Like a Lion. In ZION!"
        , question7: "We have to protect the parks cause the future generations need life changing experiences that aren't overproduced."
    }
    , wade: {
        name: "Wade"
        , question1: "Haleakalā National Park"
        , question2: "A literal out-of-this-world feel ranging from Sliding Sands, which feels like Mars, to the surreal stargazing at night, where so many stars are visible one feels like they're adrift in space. Many also go just for the sunrise, which I've yet to experience. "
        , question3: "Not so much a favorite, but definitely memorable, involved a friend (Eagle Scout) starting up the wood-fueled furnace in the cabin and leaving the cover door open before we all went to bed. Through drafting problems and our own incompetence, smoke eventually spilled into the cabin while we were sleeping and was only noticed when another friend woke up to pee. He promptly woke the rest of us up and we could barely see anything. That could have ended very differently... "
        , question4: "Hike in and stay in a cabin/tent overnight. The experience is unforgettable."
        , question5: "Probably a Nene Goose... mostly because I can't imagine being a goose and calling a harsh volcanic crater home (vice some huge lake)."
        , question6: "I look above head. My vision focuses in. Fleeting clarity"
        , question7: "I'd say height is most easily grasped by measuring tall against short. Similarly, to truly appreciate and recognize our symbiotic relationship with Mother Earth, we must maintain the dichotomy of purity (National Parks) against the impurities we inevitably introduce ourselves."
    }
    , mike: {
        name: "Mike"
        , question1: "Yosemite National Park"
        , question2: "Two main features are what set Yosemite apart, the biodiversity and geologic diversity. From the Yosemite Valley floor to the top of granite cliffs, you can appreciate the rapid change in climate and what you experience with your five senses. A weekend won't let you experience but a speck of the grandeur of Yosemite National Park. If you love having a variety of things to do and/or are a geologic/nature geek, this has to be on your list of places to visit."
        , question3: "In my only visit, a group of us hiked the Upper Yosemite Falls Trail (Half-dome was not open). Which is a fun day hike (7.2 miles round trip) with a rewarding close-up view of the upper falls and get a nice spray to cool you off as well as the panoramic view of many of the other famous landmarks within Yosemite."
        , question4: "If you're very confident in your stamina and hiking ability, most people would say waking up super early and climbing Half-Dome if it's open. If you're not that confident, but still want a challenge, there are other hikes that offer great views around the valley."
        , question5: "I'm going to have go with one of the various owl species. It's probably to dangerous to venture out significantly at night, but imagine being able to fly in and above the valley under sea of stars visible without annoying light pollution."
        , question6: "Half-dome Hulk-smashes hubris"
        , question7: "Protecting our parks is essential because it gives an opportunity to every generation to reconnect with nature and remind themselves that we are part of a greater ecosystem called Mother Earth and we are charged with being stewards of this system. The collective of choices that we make as an individual and society have downstream effects that increasingly we can feel within our own lifetimes not to mention future generations."
    }
    , sarah: {
        name: "Sarah"
        , question1: "Great Smoky Mountains National Park"
        , question2: "The Smoky Mountains are mysterious and magical. There are wide expanses of virgin forest. In the morning the gorges are still filled with fog that turns the green into ribbons of green and grey. The narrow highways wind along the mountain face and duck under waterfalls and past rocky creeks. The Smoky Mountains are known for their diversity and abundance of plant and animal life, and when you are there you become completely and totally a part of that world."
        , question3: "Almost too many to mention. We spent summers as kids traveling to a small cabin that my mother grew up going to when she was growing up in North Carolina. My mothers maiden name is Renfro. there is a part of the creek a ways from the cabin that is self declared as Renfro Rock. The creek winds around the rock into a series of gentile waterfalls. My dad would take us in the large inner tubes (the inner tire tubes from semi trucks) and we'd float down the creek. Best water park ride I know."
        , question4: "Hike the waterfalls. Or go to the World's Smallest Post Office. My sister and I decided to drive to this attraction in highschool. Its not much, but we have about 15 photos from a disposable camera that are pretty funny."
        , question5: "Maple tree. Great view. Sexy leaves."
        , question6: "Pooh sticks on the bridge. Soft frothly foam against grey rocks. The cool creek slips by. (See A.A. Milne for definition of Pooh sticks. A top 10 game in the Read household.)"
        , question7: "Parks make us better people."
    }
    , fern: {
        name: "Fern"
        , question1: "White Sands National Park"
        , question2: "White Sands is an incredibly humbling and whimsical stretch of mother nature’s wonders in the middle of a desolate stretch of New Mexico. It reminds me of not only how transient our world and life is, but also how resilient it is. White Sands used to be the bottom of a lake millions of years ago and with time, the lake dried up and the mineral stones at the bottom of the lake were windblown into tiny particles of pure white sand. This park’s long history of coming to be and humble simplicity make it shine with beauty."
        , question3: "You know when you just light up with the feeling of overwhelming connection, awe and inspiration? I felt that at White Sands. Mother Nature put on a SHOW for us! We arrived in the afternoon and stayed as the sun set. While the sun was setting, the sky turned this deep, passionate red, purple and pink that was in such stark contrast to the snow white sands below it. As the sky became darker and gloomier, we saw these intense flashes of lightening that lit up the sky…and then the sky opened and unleashed a badass summer hail storm!"
        , question4: "White Sands is literally just a shit ton of snow white sand. They have a small visitor’s center and a paved road you can drive along. You can also walk along boardwalks or walk in the sand to explore the dunes. There are native plants and opportunities to hike, backpack, picnic and even sled! The coolest part is really being able to just be surrounded by sand in the middle of NOWHERE. For no apparent reason. My favorite thing - hands down - was watching the summer sun set over the rippling snow white sand dunes."
        , question5: "Roadrunner! I saw my first roadrunner ever around here! The roadrunner is New Mexico’s state bird and this little guy can run up to 15mph AND fly!"
        , question6: "Sky scraped sediment"
        , question7: "I went to a conference recently where a woman stood on the platform and read a list of all the species that have recently been placed on the endangered species list. As she listed each animal, I began to cry. Her list didn’t stop. It went on and on and on. Our national parks are the homes of these animals. They are a part of our ecosystem and world. Our health, wellbeing and happiness is directly related to the health, happiness and diversity in our environment. Nature is my sense of connection to the present moment and to simplicity, humility, awe and joy. There is nothing that grounds me more than being among the trees, the ocean or on a hike. Without humans accepting the need to invest in and protect our parks, how will we ensure that we prioritize the health and diversity of our ecosystem and in turn the health and happiness of ourselves?"
    }
    , linda: {
        name: "Linda"
        , question1: "Not a National Park because it's on Navajo land but...Antelope Canyon!"
        , question2: "This is a magical playground for the imaginative mind. The curvy canyon walls are carved out by wind erosion and the colors range from a deep purple hue to a glowing orange. Light beams shine from the crevices above. One can see shapes of bears, eagles, a candle and even George Washington depending on the angle, lighting and your mental creativity."
        , question3: "The park tours are always led by Native American guides that have known the land for decades. At the deepest part of the canyon and at a particularly special hour, our guide led us to an area where a light beam shined down almost like a spotlight. He shared with us an old native song which resonated through the canyon walls and sang back to us in chorus. It felt like the spirits of the cave were actually singing to us."
        , question4: "Bring a camera, explore the caves and see what shapes come to life. My favorite is meeting George Washington, or I like to call him George Canyonton."
        , question5: "I will be the antelope canyon PUMA because I’ll get to nap up high in a cool kitty corner and then chase the light beams through the canyon"
        , question6: "A world of color.Beasts of flight, now a girl’s face. Ever changing shapes."
        , question7: "Our national parks not only protect the most beautiful landscapes of the world, it also preserves the fraying connection between humanity and the earth we inhabit. Without the wonder and reverence for our natural ecosystems, we will be detached from the very entity that feeds, sustains and enriches us."
    }
    , rasheed: {
        name: "Rasheed"
        , question1: "North Cascades National Park"
        , question2: "Soul riveting hiking. Wild topography, forever green, glaciers, wildlife,  makes every direction a vista forever."
        , question3: "Setting up camp on our 3rd day hiking a 50 mile loop. Across the valley an unobstructed view of a glaciated peak, to our right clouds spilling down below us into the valley, to our left snow melt stream put directly into our dinner, behind us dear and marmots grazing below the peak. A lot of things about the rest of life crystalized during that trip."
        , question4: "Take a tent."
        , question5: "One of those Dr. Seuss variant dandelions saturated with a million drops of dew. It was the softest most delicate thing I've ever seen. It basically melted upon contact with my fingertip like a fluffy cat falling into a bathtub. You're really roughing it deep in that nature, crushing hard mileage for days and stuff like that will make the manliest man wipe his eyes."
        , question6: "Great Green Gain"
        , question7: "Too many humans. Humans always trying to use new land to live on and develop. New land is actually just nature. Parks preserve nature. Nature gives peace and perspective. Without peace and perspective we'll all go insane. Insane people aren't very social. It will be an awkward end to humanity."
    }
    , neda: {
        name: "Neda"
        , question1: "San Juan Islands National Historical Park"
        , question2: "The perfect blend of nature, solitude, and the possibility to enjoy a little luxury. It's a magical place."
        , question3: "My favorite memory was taking a nature walk next to our cabin. the walk led to a cove that we didn't know was there. In the cove, we found a little peninsula of stones with some dry tree branches. There was a little spot in the peninsula that was perfect for a bonfire, so we set up the bonfire knowing we would be back. Later that night around sunset, we we back to the spot to light our bonfire and watch the sunset. We listened to music for hours and were lucky enough to experience a sunset lasting from 6-7pm until almost 10:30pm. I had no idea sunsets in the Pacific NW summers are like that! We got to enjoy a chilly summer night by a roaring fire with countless stars in the sky and a sunset that seemed to never end."
        , question4: "Rent a cabin on the water! Amazing sunset and sunrise views, and we had wild deer coming to our porch, eating out of our hands!"
        , question5: "A bird. I would love to soar above the islands and enjoy the view. The lush green islands against the dark blue water is magnificent."
        , question6: "Serene, secluded, soothing. Here, where nature plays, a symphony of silence. Sea. Sky. Animals."
        , question7: "Because there are few places left on Earth where there is truly uninterrupted silence. Human nature is to crave space, time, and solitude, especially true in the face of increasing demands on our time. There is constant stimulation in this rapidly advancing world of smart phones and push notifications every minute. For the sanity of the human race, we need to preserve our parks as they provide refuge against the chaos of our lives. The ability to stand in nature and take a breath, hear your breath, and see no one around you, is a refuge worth saving."
    }
};

//modal

/*$(".clickable").click(function() {
    //Store the title string from the called object's id
    var title = $(this).attr("id");
    alert(title);
});*/
/*    document.querySelector("#title").textContent = info[event.target.id].name;
    console.log(ans[event.target.id]);*/