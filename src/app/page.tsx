
import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/section";
import RangoWidget from '@/components/rango-widget'
import styles from '@/styles/home.module.css';

export default function Home() {
  return <main>
    <Section>
      <Header />
      <div className={styles.sectionHome}>
        <div id="home1" className="z-[1] relative">
          <div className={styles.textVideoTitle}>First Time on Dexifier?</div>
          <div className={"my-2 " + styles.textVideoSubtitle}>Watch this video</div>
          <div className="flex">
            <iframe className="home1Video max-w-full" src="https://www.youtube.com/embed/pq7g0O76g2E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div id="home2">
          <div className="min-h-[540px] z-[1] relative">
            <RangoWidget />
          </div>
        </div>
        <div id="home3" className="flex">
          <div className="home3Div w-[380px] h-[380px] ml-auto mt-auto relative">
            <div className="absolute w-full right-[0] bottom-[0px]">
              <div className="absolute w-[25%] top-[-15%] left-[5%]">
                <img src="1.gif" className="rotate-[120deg]" alt="gif1" />
              </div>
              <div className="relative z-[1]"><img src="2.gif" className="" alt="gif2" /></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    {/* Exchange Section */}
    <Section>
      <div className={styles.sectionExchange}>
        <div className={`text-center col-span-2 ${styles.textSectionTitle48}`}>
          <span className={styles.textHighlight}>Easy</span> & Infinite Exchange routes
        </div>
        <div className="flex items-center">
          <img src="exchange.png" alt="exchange" />
        </div>
        <div className={styles.textExchange}>
          We automatically find the fastest & cheapest trade routes for you. <br /><br />
          With 50+ Blockchains supported, and 1000s of coins, there are no limits to what you can trade.
        </div>
      </div>
    </Section>
    {/* Privacy Section */}
    <Section>
      <div className={styles.sectionPrivacy}>
        <div className={styles.textSectionTitle48}>
          <span className={styles.textHighlight}>Privacy</span> comes first
        </div>
        <div className={styles.textSectionContent}>
          At Dexifier, we believe in the unalienable right to privacy and freedom in the financial world. In a landscape cluttered with mandatory sign-ups and invasive KYC checks, we stand apart. Dexifier is your gateway to a decentralized exchange experience that fiercely protects your anonimity and financial privacy.
        </div>
        <div className={"font-bold " + styles.textSectionContent}>
          No Logins, No Cookies, No KYC -- EVER.
        </div>
        <div className={styles.sectionPrivacyCards}>
          <div className={styles.cardPrivacy}>NO logins/ signups</div>
          <div className={styles.cardPrivacy}>No cookies</div>
          <div className={styles.cardPrivacy}>NO kyc</div>
        </div>
      </div>
    </Section>
    {/* Pair Section */}
    <Section>
      <div className={styles.sectionPair}>
        <div className={"text-center " + styles.textSectionTitle40}>
          <span className={styles.textHighlight}>Frequently</span> traded pairs
        </div>
        <div className={"mt-[60px] gap-[20px] " + styles.sectionPairContent}>
          <div className={"grid gap-[30px] underline font-bold text-center " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
          <div className={"grid gap-[30px] underline font-bold text-center " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
          <div className={"grid gap-[30px] underline font-bold text-center " + styles.textSectionContent}>
            <a href="#">ETH to BTC</a>
            <a href="#">LTC to ETH</a>
            <a href="#">USDT to BTC</a>
            <a href="#">BTC to XRP</a>
            <a href="#">BTC to USDT</a>
            <a href="#">ETH to BTC LTC to ETH</a>
          </div>
        </div>
      </div>
    </Section>
    {/* Customer Section */}
    <Section>
      <div className={styles.sectionCustomer}>
        <div className={styles.sectionCustomerL}>
          <div className={styles.textSectionTitle40}>
            <span className={styles.textHighlight}>24/7</span> Customer Support
          </div>
          <div className={"mt-[40px] " + styles.textSectionContent}>
            Having trouble with a swap? Head to our Discord, open a ticket or ask a question. Our international team & community are ready to help, around the clock.
          </div>
          <div className={"mt-[80px] " + styles.buttonJoin}>
            Join Discord
          </div>
        </div>
        <div className={"flex items-center " + styles.sectionCustomerR}>
          <img src="customer.png" alt="customer" />
        </div>
      </div>
    </Section>
    {/* Wallets Section */}
    <Section>
      <div className={styles.sectionWallets}>
        <div className={`${styles.sectionWalletL} ${styles.textSectionTitle40}`}>
          <span className={styles.textHighlight}>Wallets</span> & Projects supported
          <img className="mt-[80px] mx-auto" src="wallet.png" alt="wallet" />
        </div>
        <div className={"wallets " + styles.sectionWalletR} style={{ gridAutoRows: '120px' }}>
          <div className="bg-white"><img src="wallets/xdefi.jpg" alt="xdefi" /></div>
          <div className="bg-white"><img src="wallets/metamask.jpg" alt="metamask" /></div>
          <div className="bg-white"><img src="wallets/phantom.jpg" alt="phantom" /></div>
          <div className="bg-white"><img src="wallets/keplr.jpg" alt="keplr" /></div>
          <div className="bg-white"><img src="wallets/tronlink.png" alt="tronlink" /></div>
          <div className="bg-white"><img src="wallets/apptopia.png" alt="apptopia" /></div>
          <div><img src="wallets/rango.png" alt="rango" /></div>
          <div><img src="wallets/thor.png" alt="thor" /></div>
          <div><img src="wallets/maya.png" alt="maya" /></div>
          <div><img src="wallets/1inch.svg" alt="1inch" /></div>
          <div><img src="wallets/across.png" alt="across" /></div>
          <div className={styles.textIconText}>Many More...</div>
        </div>
      </div>
    </Section>
    {/* Community Section */}
    <Section>
      <div className={styles.sectionCommunity}>
        <div className="relative z-[1] flex flex-col">
          <div className={styles.textCommunity}>
            <span className={styles.textHighlight}>Join</span> Our Community!
          </div>
          <div className={`mt-[60px] ${styles.textSectionContent}`}>
            Discover the latest insights on Discord, engage with fellow crypto enthusiasts on Telegram, follow our pulse on Twitter, catch our informative and entertaining videos on YouTube.
          </div>
          <div className={"mt-auto p-[20px] border flex " + styles.socialsContainer}>
            <div className={"flex items-center " + styles.textSocials}>socials</div>
            <div className={"ml-auto flex gap-[20px] " + styles.iconSocials}>
              <img src="socials/discord.svg" alt="discord" />
              <img src="socials/telegram.svg" alt="telegram" />
              <img src="socials/twitter.svg" alt="twitter" />
              <img src="socials/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
        <div>
          <img className="mx-auto" src="community.png" alt="community" />
        </div>
      </div>
    </Section>
    <Footer />
  </main>
}
