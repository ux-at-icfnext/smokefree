<div class="quit-plan-ui">
    <button>Start Now</button>
    <diiv class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 1 of 6</span>
            <span>Mark Your Calendar</span>
        </div>
        <p><span>Set a quit date.</span>The important first step is to decide when you want to quit.</p>
        {% include 'patterns/datepicker.md' %}
        <button>Add to My Calendar</button>
        <p>Not ready to set a quit date? <a href="">Try something else.</a></p>
        <div class="quit-plan-tips">
            <img>
            <h3>Tips</h3>
            <div class="tip">
                <p><span>Tip 1:</span> Choose a day in the next week or two. This will give you enough time to prepare.</p>
            </div>
            <div class="tip">
                <p><span>Tip 2:</span> Set yourself up for success. Pick a date that isn't already likely to be stressful one.</p>
            </div>
            <div class="tip">
                <p><span>Tip 3:</span> Quitting smoking is easier when the people in your life support you. Let them know you are planning to quit and explain how they can help</p>
            </div>
        </div>
    </div>
    <button>Next Arrow</button>
    <diiv class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 2 of 6</span>
            <span>Calculate Your Savings</span>
        </div>
        <p><span>Enter how many cigarettes you smoke and how much a pack of cigarettes costs.</span>You'll find out how much money you can save by quitting.</p>
        <div class="quit-plan-calc">
            <img>
            <span>I smoke about</span>{% include 'patterns/textinput.md' %} <span> cigarettes each day.</span>
            <span>I spend about $</span>{% include 'patterns/textinput.md' %} <span> on a pack of cigarettes.</span>
        </div>
        <div class="did-you-know">
            <img>
            <h3>Did You Know</h3>
            <p>A pack-a-day smoker can save over <span>$2,200</span> from quitting for one year.
        </div>
    </div>
    <button>Next Arrow</button>
    <diiv class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 3 of 6</span>
            <span>Think About Your Reasons for Quitting</span>
        </div>
        <p><span>Choose your reasons for quitting smoking</span>Knowing your reasons for why you want to quit can help keep you motivated and on track, especially in difficult moments.</p>
        <div class="quit-plan-row">
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
        </div>
        <div class="quit-plan-row">
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
            <div class="quit-plan-buttons">
                <p> Live Longer and Healthier</p>
                <img>
            </div>
        </div>
    </div>
    <button>Next Arrow</button>
    <div class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 4 of 6</span>
            <span>Know Your Triggers</span>
        </div>
        <p><span>Choose your smoking triggers.</span> Think about what things make you more likely to smoke, and we'll give you strategies to keep you in control.</p>
        <div class="quit-plan-step-4-content">
            <div class="quit-plan-check-list">
                <h3>Emotional Triggers</h3>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-stress"
                    type="checkbox"
                    name="emotional-triggers"
                    value="stress"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-stress"
                    >Stress</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-happiness"
                    type="checkbox"
                    name="emotional-triggers"
                    value="happiness"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-happiness"
                    >Happiness</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-anxiety"
                    type="checkbox"
                    name="emotional-triggers"
                    value="anciety"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-anxiety"
                    >Anxiety</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-excitement"
                    type="checkbox"
                    name="emotional-triggers"
                    value="excitement"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-excitement"
                    >Excitement</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-anger"
                    type="checkbox"
                    name="emotional-triggers"
                    value="anger"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-anger"
                    >Anger</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-lonliness"
                    type="checkbox"
                    name="emotional-triggers"
                    value="lonliness"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-lonliness"
                    >Lonliness</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-sadness"
                    type="checkbox"
                    name="emotional-triggers"
                    value="sadness"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-sadness"
                    >Sadness</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-boredom"
                    type="checkbox"
                    name="emotional-triggers"
                    value="boredom"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-boredom"
                    >Boredom</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="emotional-triggers-relaxation"
                    type="checkbox"
                    name="emotional-triggers"
                    value="relaxation"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="emotional-triggers-relaxation"
                    >Relaxation</label>
                </div>
            </div>
            <div class="quit-plan-check-list">
                <h3>Emveryday Triggers</h3>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-waking"
                    type="checkbox"
                    name="everyday-triggers"
                    value="waking-up-in-the-morning"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-waking"
                    >Waking up in the morning</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-texting"
                    type="checkbox"
                    name="everyday-triggers"
                    value="texting-or-talking-on-the-phone"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-texting"
                    >Texting or talking on the phone</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-break"
                    type="checkbox"
                    name="everyday-triggers"
                    value="taking-a-break"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-break"
                    >Taking a break</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-working"
                    type="checkbox"
                    name="everyday-triggers"
                    value="working-or-studying"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-working"
                    >Working or studying</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-watching"
                    type="checkbox"
                    name="everyday-triggers"
                    value="watching-a-show-or-listening-to-music"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-watching"
                    >Watching a show of listening to music</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-seeing"
                    type="checkbox"
                    name="everyday-triggers"
                    value="seeing-cigaarettes-on-tv-social-media-or-in-ads"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-seeing"
                    >Seeing cigarettes on TV, social media, or in ads</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-drinking"
                    type="checkbox"
                    name="everyday-triggers"
                    value="drinking-coffee"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-drinking"
                    >Drinking coffee</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-walking"
                    type="checkbox"
                    name="everyday-triggers"
                    value="walking-or-driving"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-walking"
                    >Walking or driving</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="everyday-triggers-meal"
                    type="checkbox"
                    name="everyday-triggers"
                    value="finishing-a-meal"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="everyday-triggers-meal"
                    >Finishing a meal</label>
                </div>
            </div>
            <div class="quit-plan-check-list">
                <h3>Social Triggers</h3>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-alcohol"
                    type="checkbox"
                    name="social-triggers"
                    value="drinking-alcohol-or-going-to-social-events-like-a-party-or-a-bar"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-alcohol"
                    >Drinking alcohol or going to social events like a party or a bar</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-seeing"
                    type="checkbox"
                    name="social-triggers"
                    value="seeing-someone-smoke"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-seeing"
                    >Seeing someone smoke</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-smell"
                    type="checkbox"
                    name="social-triggers"
                    value="smelling-cigarette-smoke"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-smell"
                    >Smelling cigarette smoke</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-others"
                    type="checkbox"
                    name="social-triggers"
                    value="being-around-others-who-smoke"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-others"
                    >Being around others who smoke</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-offered"
                    type="checkbox"
                    name="social-triggers"
                    value="being-offered-a-cigarette"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-offered"
                    >Being offered a cigarette</label>
                </div>
                <div class="usa-checkbox">
                    <input
                    class="usa-checkbox__input"
                    id="social-triggers-celebrating"
                    type="checkbox"
                    name="social-triggers"
                    value="celebrating-holidays-or-other-special-occasions"
                    checked="unchecked"
                    />
                    <label class="usa-checkbox__label" for="social-triggers-celebrating"
                    >Celebrating holidays or other special occasions</label>
                </div>
            </div>    
        </div>
    </div>
    <button>Next Arrow</button>
    <diiv class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 5 of 6</span>
            <span>Fight Your Cravings</span>
        </div>
        <P><span>Choose how you will deal with cravings.</span> When you get an urge to smoke, changing what you are doing or where you are can make it easier to get your mind off smoking until the feeling passes.</p>
        <div class="quit-plan-step-five-content">
            <span>When a craving hits, I will:
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="distract-myself"
                type="checkbox"
                name="fight-your-cravings"
                value="distract-myself-stop-what-im-doing-and-do-something-else"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="distract-myself"
                >Distract myself. Stop what I'm doing and do something else.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="get-some-excercise"
                type="checkbox"
                name="fight-your-cravings"
                value="get-some-excercise"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="get-some-excercise"
                >Get some excercise</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="go-to-a-place"
                type="checkbox"
                name="fight-your-cravings"
                value="go-to-a-place-where-smoking-isnt-allowed"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="go-to-a-place"
                >Go to a place where smoking isn't allowed.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="drink-water"
                type="checkbox"
                name="fight-your-cravings"
                value="drink-a-glass-of-water"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="drink-water"
                >Drink a glass of water.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="breathe"
                type="checkbox"
                name="fight-your-cravings"
                value="take-10-deep-breaths"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="breathe"
                >Take 10 deep breaths.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="text-or-talk"
                type="checkbox"
                name="fight-your-cravings"
                value="text-or-talk-with-a-friend-or-family-member-who-supports-me-quitting-smoking"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="text-or-talk"
                >Text or talk with a friend or family member who supports me quitting smoking</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="call-quitline"
                type="checkbox"
                name="fight-your-cravings"
                value="call-a-tobacco-quitline-to-talk-to-a-tobacco-cessation-counselor"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="call-quitline"
                >Call a tobacco quitline to talk to a tobacco cessation counselor.</label>
            </div>
        </div>
        <div class="tip-section">
            <img>
            <h3>Tip</h3>
            <p>Come up with more ideas to try on your own. Keep trying new things until you find what works for you.</p>
        </div>
    </div>
    <button>Next Arrow</button>
    <diiv class="quit-plan-section">
        <div class="quit-plan-divider">
            <span>Step 6 of 6</span>
            <span>Set Yourself Up for Success</span>
        </div>
        <p><span>Choose strategies and tools to help you quit.</span>Including these things in your quit plan can keep you on track and boost your chances of quitting for good. Check your quit plan for more information about these options and how to access these tools</p>
        <div class="quit-plan-step-six-content">
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="ask-my-doctor"
                type="checkbox"
                name="strategies"
                value="ask-my-doctor-about-prescription-or-over-the-counter-quit-smoking-medications"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="ask-my-doctor"
                >Ask my doctor about prescription or over-the-counter quit smoking medications.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="insurance"
                type="checkbox"
                name="strategies"
                value="contact-my-health-insurance-plan-to-find-out-if-quit-smoking-medications-are-covered"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="insurance"
                >Contact my health insurance plan to find out if quit smoking medications are covered.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="throw-away"
                type="checkbox"
                name="strategies"
                value="throw-away-my-cigarettes-lighters-or-matches-and-ashtrays-in-my-home-and-car"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="throw-away"
                >Throw away my cigarettes, lighters or matches, and ashtrays in my home and car.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="contact"
                type="checkbox"
                name="strategies"
                value="contact-at-least-three-people-who-will-support-me-quitting-tell-them-my-quit-date-and-ask-for-their-help"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="contact"
                >Contact at least three people who will support me quitting. Tell them my quit date and ask them for their help.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="chat-online"
                type="checkbox"
                name="strategies"
                value="chat-online-with-a-trained-quit-smoking-counselor"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="chat-online"
                >Chat online with a trained quit smoking counselor.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="tobacco-quitline"
                type="checkbox"
                name="strategies"
                value="save-a-tobacco-quitline-number-in-my-phone-and-call-it-when-i-need-to-talk-to-a-quit-smoking-counselor"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="tobacco-quitline"
                >Save a tobacco quitline number in my phone and call it when I need to talk to a quit smoking counselor.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="smokefree-text"
                type="checkbox"
                name="strategies"
                value="sign-up-for-a-Smokefree-text-message-program-to-get-daily-tips-and-support"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="smokefree-text"
                >Sign up for a Smokefree text message program to get daily tips and support.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="smokefree-app"
                type="checkbox"
                name="strategies"
                value="Download-a-smokefree-app-to-help-me-track-cravings-get-tips-and-monitor-my-progress"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="smokefree-app"
                >Download a smokefree app to help me track cravings, get tips,and monitor my progress.</label>
            </div>
            <div class="usa-checkbox">
                <input
                class="usa-checkbox__input"
                id="in-person-counseling"
                type="checkbox"
                name="strategies"
                value="look-for-in-person-smoking-cessation-counseling-in-my-area"
                checked="unchecked"
                />
                <label class="usa-checkbox__label" for="in-person-counseling"
                >Look for in-person smoking cessation counseling in my area.</label>
            </div>
        </div>
    </div>
    <button>Next Arrow</button>
    <div class="personalized-plan-section">
        <h3>Your Personalized Quit Plan is Ready!</h3>
        <button>Let's Go!</button>
    </div>
</div>