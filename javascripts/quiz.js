var results = [
    {
        'result': 'A',
        'title': '<p><em>Woman on the Edge of Time</em> by Marge Piercy</p>',
        'quote': '<p class="result-quote">Yes, you can have my child, you can keep my child. Even with your obscenities and your talking cats. She will be strong there, well fed, well housed, well taught, she will grow up much better and stronger and smarter than I. I assent… She will never be broken as I was. She will be strange, but she will be glad and strong and she will not be afraid…. She will walk in strength like a man and never sell her body… People of the rainbow with its end fixed in earth, I give her to you!</p>',
        'description': '<p>Welcome to Mattapoisett! It is the year 2137. People of all gender, sexual orientation, and race exist in harmony, but it’s difficult to tell whether people are male or female – some men have enlarged breasts, and some women are as burly as Olympians. Mattapoisett is also very racially diverse. This is due to a genetic mixing agreement established a few decades back that ensures diversity in each town but also has radically controlled reproduction: babies are born in a brooder, and a child is born only when someone in the community dies. Motherhood is undertaken voluntarily, and children are raised with a total of 3 mothers who can either be male or female. This unique family structure extends to the entire community, as people often eat communally and make town decisions collectively. There is an emphasis on travel, art, and free spirit, even in relationships – men and women couple without regard for gender or race, and often have multiple lovers simultaneously.</p><p>Life in Mattapoisett is lived simply and sustainably. There are no crazy technological advancements here except for the automation of housework. We an agrarian society and we have limited our diet to mainly vegetables and fish. Fossil fuels are a thing of the past and we rely mostly on solar energy. This emphasis on ecological care for our world has made humans more caring towards the earth and each other. If you would like to learn more about Mattapoisett, follow Connie’s journey into the future in <em>Woman on the Edge of Time</em> by Marge Piercy!</p>',
        'image': '/images/julia-azarcon/book_a.jpg'
    },
    {
        'result': 'B',
        'title': '<p><em>The Left Hand of Darkness</em> by Ursula K. Le Guin</p>',
        'quote': '<p class="result-quote">Though I had been nearly two years on Winter I was still far from being able to see the people of the planet through their own eyes. I tried to, but my efforts took the form of self-consciously seeing a Gethenian first as a man, then as a woman, forcing him into these categories so irrelevant to his nature and so essential to my own.</p>',
        'description': '<p>Greetings from the planet of Gethen, or as you humans may colloquially call it Winter. Humans have traveled across galaxies to study our culture, which is of keen interest to them for some reason. Here you could describe us as androgynes or asexual, as there is no such thing as a “man” or “woman” in Winter. Once a month, however, our sexual potential reaches its height, our hormones balance with an interested partner, and we grow either male or female genitals. After these two days we turn into sexually latent androgynes and the cycle continues. Because our pheromones cannot be controlled, anyone can grow male or female genitals and anyone can sire and bear a child.</p><p>We are a hierarchical society ruled by a King. Our actions are dictated by social norms that are founded on a set of unspoken rules and formal courtesy, which sounds similar to humans, but they are not defined by gender roles. Our whole society is structured around our mating cycles and the unforgiving cold weather.</p><p>We are currently hosting an Envoy from your planet. He is a male Terran-native, and you can read about his time here and what he’s learned about Winter in Le Guin’s <em>The Left Hand of Darkness.</em></p>',
        'image': '/images/julia-azarcon/book_b.jpg'
    },
    {
        'result': 'C',
        'title': '<p><em>The Female Man</em> by Joanna Russ</p>',
        'quote': '<p class="result-quote">“Don’t pull like that,” she said. “You’ll break your arm.”<br>So he pulled. The little limp-leather notebook fluttered out on to the floor, whence I picked it up. Everything went awfully quiet. The pain had stunned him, I guess.<br>She said in astonished good humor: “But why do you want to fight when you do not know how?”</p>',
        'description': '<p>Welcome to Whileaway, a utopian world where advanced technology and an agrarian society live in balance. Here there are no men, and they are believed to have all died due to a gender specific plague over 800 years ago. In reality, however, this utopia was only possible because of a war between the sexes where all men perished at the hands of women. Technology has made it possible for women to procreate with two ova, and women live happily married with each other. Heterosexual women enjoy their lives here too, and are sexually pleased by male robots integrated in their homes and designed to be attractive and submissive.</p><p>All offspring are daughters, and they are encouraged to live freely and independently at the age of 13, traveling without guidance. All forms of education are vocational, equipping women to join the highly productive workforce that utilizes technology to conduct all high-level industrial and professional tasks with ease. In our spare time, we enjoy dueling, but in the future of the all-out sex war, killing men really is our favorite past time. Follow Janet, Jael, and two other women who represent different outlooks of feminism in the gripping book <em>The Female Man</em> by Joanna Russ.</p>',
        'image': '/images/julia-azarcon/book_c.jpg'
    },
    {
        'result': 'D',
        'title': '<p><em>Les Guérillères</em> by Monique Wittig</p>',
        'quote': '<p class="result-quote">By means of stratagems he has stultified your understanding, he has woven around you a long list of defects that he declares essential to your wellbeing, to your nature. He has invented your history. But the time approaches when you shall crush the serpent under your heel, the time approaches when you can cry, erect, filled with ardour and courage, Paradise exists in the shadow of the sword.</p>',
        'description': '<p>This land has no name. We are a tribe of warrior women. This is the separatism rebellion against men. The patriarchy has been overthrown, but at the cost of war and bloodshed. Women of all age, background, and color are celebrated here.  We have destroyed bodies, government, symbols, and language, as these forms of knowledge have oppressed women for too long. Women here are free to love all other women, and much of the art and poetry in this utopia praises the clitoris, vulva, and anything relating to female genitalia. We will no longer be slaves. We will fight with bullets, blades, machine guns, heavy artillery, to take back what is ours again.</p><p>To learn more about the vicious war and how to destroy the patriarchy to reach this utopia, read <em>Les Guérillères</em> by Monique Wittig.</p>',
        'image': '/images/julia-azarcon/book_d.jpg'
    }
]
$(document).ready(function() {
    $('.multiple-choice').submit(function(event) {
        event.preventDefault();

        console.log(event.currentTarget);

        var answers = [];
        var choices = $('.multiple-choice input');

        for (var i=0; i < choices.length; i++) {
            if (choices[i].checked) {
                answers.push(choices[i].value);
            }
        }

        if (answers.length < 12) {
            alert("Please answer all questions");
        } else {
            answers = compressArray(answers);

            console.log(answers);

            var mostChoices = '';
            var mostChoicesNum = 0;
            $.each(answers, function(key, val) {
                console.log("iteration", mostChoices);
                if (val.count > mostChoicesNum) {
                    mostChoicesNum = val.count;
                    mostChoices = val.value;
                }
            });

            console.log(mostChoices);
            console.log(mostChoicesNum);

            for (var j = 0; j<results.length; j++) {
                if (results[j].result == mostChoices) {
                    console.log(results[j]);
                    $('form').hide();
                    $('.results').append('<p class="most-chosen">If you got mostly <strong>' + mostChoices + '</strong>, you belong to the utopia in...</p>')
                    $('.results').append('<div class="entry-image book-image"><img src="' + results[j].image + '" /></div>');
                    $('.results').append(results[j].title);
                    $('.results').append(results[j].quote);
                    $('.results').append(results[j].description);
                }
            }
        }
    });

    function compressArray(original) {
        var compressed = [];
        var copy = original.slice(0);
     
        for (var i = 0; i < original.length; i++) {
            var count = 0;    
            for (var w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    count++;
                    delete copy[w];
                }
            }
            if (count > 0) {
                var a = new Object();
                a.value = original[i];
                a.count = count;
                compressed.push(a);
            }
        }
     
        return compressed;
    };
});
