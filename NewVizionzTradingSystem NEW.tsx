import { useState, useEffect, useRef } from "react";

const C = { g:"#00FFB2", b:"#0099FF", p:"#B14FFF", y:"#FFD166", r:"#FF4D6D" };

const COURSES = [
  {
    id:1, num:"01", level:"BEGINNER", icon:"🌱", color:C.g,
    title:"Foundations", subtitle:"Zero to Market Aware",
    desc:"Master the building blocks of ICT & Smart Money Concepts. Learn market structure, liquidity theory, sessions, and how institutions really move price.",
    grad:"linear-gradient(135deg,#030d07,#051409)",
    modules:[
      { id:"m1", icon:"🌐", title:"The Market Ecosystem", dur:"45 min", lessons:[
        { t:"Who Really Moves the Market?", v:"pyramid", body:"Markets are NOT random. They run on a strict hierarchy:\n\n• CENTRAL BANKS: Federal Reserve, ECB, BOJ. Set monetary policy and interest rates. Sit at the very top of the chain.\n• TIER-1 BANKS: JPMorgan, Goldman Sachs, Deutsche Bank. Execute massive block orders. CREATE the liquidity pools retail traders react to.\n• HEDGE FUNDS: Algorithmic strategies, large positions, trend followers.\n• RETAIL TRADERS (YOU): Sit at the bottom. You provide the liquidity everyone above needs to operate.\n\nICT's core revelation: your stop loss is someone else's entry. Institutions HUNT retail stops on purpose to fill their own orders at better prices. Once you understand this, you stop being prey and start following the predator." },
        { t:"What Is Smart Money Concept?", v:"pillars", body:"SMC teaches you to read institutional footprints instead of chasing lagging indicators like RSI or MACD.\n\nSmart Money leaves undeniable traces in the chart:\n• ORDER BLOCKS — where they entered large positions\n• FAIR VALUE GAPS — imbalances they created moving fast\n• LIQUIDITY POOLS — specific levels they are actively targeting next\n\nInstead of asking 'what does RSI say?' — SMC traders ask: WHERE is smart money positioned, and where are they going next?\n\nThis single shift in perspective is worth more than any indicator combination ever created." },
        { t:"All Tradeable Instruments", v:"instruments", body:"ICT and SMC apply universally to every liquid market:\n\n• FOREX: 24/5, high leverage. EUR/USD, GBP/USD, USD/JPY. Best for liquidity sweeps and session killzones.\n• FUTURES: ES, NQ, CL, GC. Near 24/7. Built-in leverage. COT data adds powerful confluence.\n• OPTIONS: Defined risk, asymmetric returns. Use ICT for directional bias, then express through options contracts.\n• CRYPTO: 24/7 markets. Bitcoin and ETH follow ICT patterns with remarkable precision due to heavy manipulation.\n• INDICES & COMMODITIES: Gold, Oil, SPX, NDX — all follow identical institutional logic." },
        { t:"The Four Trading Sessions", v:"sessions", body:"Not all market hours are equal. ICT identifies four critical windows:\n\n• ASIA (20:00–00:00 NY): Consolidation. Smart money builds the range. Mark the highs and lows — they WILL be swept.\n• LONDON (02:00–05:00 NY): High volatility. First major directional push. Often fakes the opposite direction before NY.\n• NEW YORK AM (07:00–10:00 NY): THE killzone. Highest volume. Best setups. Best execution. Your primary trading window.\n• NY PM (13:30–16:00 NY): Secondary moves and end-of-day reversals.\n\nTrading OUTSIDE killzones dramatically lowers your win rate. Trade the session, not random hours." },
      ]},
      { id:"m2", icon:"🏗️", title:"Market Structure", dur:"60 min", lessons:[
        { t:"Swing Highs & Swing Lows", v:"default", body:"A Swing High: any candle with LOWER highs on both sides — a local peak.\nA Swing Low: any candle with HIGHER lows on both sides — a local trough.\n\nThese are your primary structural reference points. Mark them on EVERY timeframe you analyze.\n\nPrevious swing highs = potential resistance and upside targets.\nPrevious swing lows = potential support and downside targets.\nThe RELATIONSHIP between consecutive swings = current market direction.\n\nWithout identifying swing points, you cannot read market structure. With them, every chart tells you its complete story." },
        { t:"Bullish vs Bearish Structure", v:"default", body:"BULLISH STRUCTURE = Higher Highs (HH) + Higher Lows (HL)\nEvery pullback is bought. Price consistently respects previous highs as new support.\nAction: ONLY look for long entries at Higher Low formations.\n\nBEARISH STRUCTURE = Lower Lows (LL) + Lower Highs (LH)\nEvery rally is sold. Price consistently treats previous lows as new resistance.\nAction: ONLY look for short entries at Lower High formations.\n\nNEVER trade against the prevailing structure until you have a confirmed Change of Character. Fighting structure is the single most expensive mistake in trading." },
        { t:"BOS vs CHoCH", v:"default", body:"BREAK OF STRUCTURE (BOS): Price breaks a swing point IN the direction of the existing trend.\n• Bullish BOS = price takes out a previous swing high → CONFIRMS bullish continuation\n• Bearish BOS = price takes out a previous swing low → CONFIRMS bearish continuation\n\nCHANGE OF CHARACTER (CHoCH): Price breaks structure AGAINST the current trend.\n• Your first WARNING that the trend may be reversing\n• A CHoCH alone does NOT mean enter the opposite direction immediately\n• Wait for lower timeframe confirmation: a smaller BOS in the new direction\n\nBOS = trend continuation. CHoCH = potential trend change. Master this distinction." },
        { t:"Multi-Timeframe Analysis", v:"default", body:"ICT's golden rule: HIGHER timeframe sets the BIAS. LOWER timeframe gives the ENTRY.\n\nTop-down process:\n1. Monthly → overall long-term bias\n2. Weekly → weekly narrative and key levels\n3. Daily → daily bias, major OBs and FVGs\n4. 4H → refine entry zone, confirm structure\n5. 1H → identify the setup forming\n6. 15M/5M → entry trigger\n7. 1M → precision entry and stop placement\n\nIf Daily says bullish → ONLY look for longs on M15. Fighting the higher timeframe is the #1 most expensive mistake beginners make." },
      ]},
      { id:"m3", icon:"💧", title:"Liquidity Theory", dur:"75 min", lessons:[
        { t:"What Is Liquidity?", v:"liq", body:"Liquidity = pending orders waiting in the market.\n\nBUY-SIDE LIQUIDITY: Clusters of buy stop orders sitting ABOVE swing highs and equal highs. These are the stop losses of retail traders who are currently short.\n\nSELL-SIDE LIQUIDITY: Clusters of sell stop orders sitting BELOW swing lows and equal lows. These are the stop losses of retail traders who are currently long.\n\nInstitutions need to fill MILLIONS of contracts. They cannot do this quietly at one price level — they must HUNT these pools to get filled. Every significant price move has one primary goal: reach a liquidity pool.\n\nOnce you accept this, you see the market's real architecture." },
        { t:"Liquidity Sweeps — Stop Hunts", v:"default", body:"A sweep: price spikes BEYOND a key level — triggering every retail stop — then REVERSES sharply.\n\nNot random volatility. This is institutional order filling.\n\nThe sweep process:\n1. Price approaches a key liquidity level (swing high, EQH, trendline)\n2. Retail traders place stops just beyond, expecting the level to hold\n3. Price breaks through, triggering all those stops simultaneously\n4. Institutions use the flood of orders to fill their own position\n5. Price reverses — retail stopped out, institutions now fully filled\n\nHow to trade it: NEVER enter the breakout. WAIT for reversal confirmation after the sweep. The sweep IS the setup — not the breakout." },
        { t:"Equal Highs & Equal Lows", v:"default", body:"Equal Highs (EQH): Two or more swing highs at the SAME price level.\nEqual Lows (EQL): Two or more swing lows at the SAME price level.\n\nEvery retail trader has been taught: double tops are resistance and double bottoms are support. They cluster their stops just beyond these levels.\n\nSmart money KNOWS this and targets them deliberately and consistently.\n\nHow to trade EQH/EQL:\n• Mark every EQH and EQL with a horizontal line on your chart\n• These levels WILL be swept before the real move begins\n• After the sweep, look for your entry in the opposite direction\n• Combine with Order Blocks and FVGs at the same level for maximum confluence" },
        { t:"Inducement — The Decoy", v:"default", body:"Before the real institutional move, smart money often creates a smaller preliminary sweep called the Inducement (IDM).\n\nPurpose: Trap impatient retail traders in the WRONG direction before the real move.\n\nExample — Bullish setup:\n1. Price consolidates in a range\n2. Price briefly dips BELOW a minor swing low — the Inducement (trapping bears)\n3. Bears short, believing the breakdown is real\n4. Price REVERSES violently upward — the actual bullish move begins\n5. Bears get stopped out, adding fuel to the bullish move\n\nICT traders WAIT for the inducement to complete before entering. Entering before the IDM = getting caught in the trap with retail." },
      ]},
      { id:"m4", icon:"🕯️", title:"Price Action & Candles", dur:"40 min", lessons:[
        { t:"Reading Candles the ICT Way", v:"default", body:"Every candle tells a story using 4 prices: Open, High, Low, Close.\n\n• BODY: Range between Open and Close. Large body = strong institutional directional conviction.\n• UPPER WICK: Where price was REJECTED upward. Long upper wick = sellers overwhelmed buyers decisively at that level.\n• LOWER WICK: Where price was REJECTED downward. Long lower wick = buyers overwhelmed sellers decisively.\n\nICT does NOT use traditional patterns (Doji, Hammer, Shooting Star) in isolation. Every candle is read as institutional evidence:\n• Large bullish body, minimal wicks = aggressive institutional buying\n• Small body, equal wicks = institutions hiding their true intent\n• Long wick into key zone = strong institutional rejection — take notice" },
        { t:"Displacement Candles", v:"default", body:"Displacement: a large, full-bodied candle that moves price rapidly through an area with conviction.\n\nThis is INSTITUTIONAL ORDER FLOW made visible. Not retail FOMO — this is a Tier-1 bank executing a block order.\n\nKey characteristics:\n• Large real body — open to close covers most of the candle range\n• Minimal wicks — price moved decisively without significant rejection\n• Breaks through previous structure or key levels\n• Creates a Fair Value Gap in its wake\n\nAfter displacement, price almost always RETURNS to fill the gap it created. That gap is your entry opportunity.\n\nDisplacement + FVG + Order Block confluence = ICT's highest-probability entry combination." },
        { t:"ICT Candle Formations", v:"default", body:"Three advanced formations every ICT trader must recognize:\n\n• BREAKER BLOCK: Forms when an Order Block is violated — price blasts completely through it. The old OB FLIPS polarity. Bullish OB → Bearish Breaker (resistance). Bearish OB → Bullish Breaker (support). These provide incredibly precise reversal entry levels.\n\n• MITIGATION BLOCK: When price moves away from an area WITHOUT fully retesting the original OB, a Mitigation Block is left behind. Price returns later — sometimes days or weeks — to fill this zone. Tag it and be patient.\n\n• REJECTION BLOCK: Strong wick rejection at a key institutional level. Often the very first signal of powerful displacement incoming in the opposite direction." },
      ]},
    ]
  },
  {
    id:2, num:"02", level:"INTERMEDIATE", icon:"⚡", color:C.b,
    title:"Core Concepts", subtitle:"Order Blocks, FVGs & Killzones",
    desc:"The most powerful ICT toolkit used by professionals daily. Master Order Blocks, Fair Value Gaps, the Dealing Range, and the precision timing framework that makes it all work.",
    grad:"linear-gradient(135deg,#030710,#040a14)",
    modules:[
      { id:"m5", icon:"📦", title:"Order Blocks", dur:"90 min", lessons:[
        { t:"The Order Block Defined", v:"ob", body:"An Order Block is the last OPPOSING candle before a strong impulsive move that breaks market structure.\n\nBULLISH ORDER BLOCK:\n• Last BEARISH (red) candle before a bullish impulse breaking a swing high\n• This zone = where institutions placed their bulk BUY orders\n• Price returns here to fill remaining unfilled institutional orders\n\nBEARISH ORDER BLOCK:\n• Last BULLISH (green) candle before a bearish impulse breaking a swing low\n• This zone = where institutions placed their bulk SELL orders\n\nWhy price returns: Not all orders get filled in the initial impulse move. The remaining institutional orders sit inside the OB zone, pulling price back like a magnet." },
        { t:"Trading the Bullish OB", v:"default", body:"Step-by-step entry protocol:\n1. Confirm BULLISH bias on D1 or H4 — top-down analysis first\n2. Identify a strong bullish impulse that broke a swing high (BOS)\n3. Look LEFT at the impulse origin — find the last RED candle before the move\n4. Mark the OB zone: Open to Close of that red candle\n5. Wait for price to RETRACE into this zone\n6. On M15 or M5, look for confirmation: FVG, rejection wick, or displacement\n7. Enter long within the OB zone\n8. Stop: 3–5 pips BELOW the OB candle's low\n9. Target: next sell-side liquidity pool above (EQH, swing high)\n\nHigher timeframe OBs carry significantly more weight. Always analyze top-down." },
        { t:"Trading the Bearish OB", v:"default", body:"Step-by-step entry protocol:\n1. Confirm BEARISH bias on D1 or H4\n2. Identify a strong bearish impulse that broke a swing low (BOS)\n3. Look LEFT at the impulse origin — find the last GREEN candle before the move\n4. Mark the OB zone: Open to Close of that green candle\n5. Wait for price to RALLY into this zone\n6. On M15 or M5, look for bearish confirmation\n7. Enter short within the OB zone\n8. Stop: 3–5 pips ABOVE the OB candle's high\n9. Target: next buy-side liquidity pool below (EQL, swing low)\n\nIf price blows through the OB without any reaction — the setup is INVALIDATED. Move on to the next." },
        { t:"Breaker & Mitigation Blocks", v:"default", body:"BREAKER BLOCK:\nWhen price VIOLATES an Order Block — trades completely through it — that OB flips polarity:\n• Old Bullish OB → Bearish Breaker (now acts as resistance)\n• Old Bearish OB → Bullish Breaker (now acts as support)\nBreakers are incredibly precise reversal levels. Mark them the moment an OB is violated.\n\nMITIGATION BLOCK:\nWhen price moves away from an area before completing a full OB retest, a Mitigation Block remains. The market will return — sometimes hours, sometimes days later.\n\nAction: Tag every Mitigation Block on your chart. Set a price alert. When price returns, look for lower timeframe confirmation to enter in the original direction." },
      ]},
      { id:"m6", icon:"🌀", title:"Fair Value Gaps", dur:"60 min", lessons:[
        { t:"Anatomy of an FVG", v:"fvg", body:"A Fair Value Gap (FVG) is a 3-candle pattern where the middle candle moves so fast that a literal gap forms in the chart:\n\nBULLISH FVG: Candle 1 High is LESS THAN Candle 3 Low → gap between them\nBEARISH FVG: Candle 1 Low is GREATER THAN Candle 3 High → gap between them\n\nThis gap = an area where buyers and sellers did NOT interact. The market treats this as an imbalance that must be corrected.\n\nPrice is magnetically drawn back to fill FVGs before continuing in the original direction. This filling behavior is one of the most consistent and exploitable patterns in all of ICT trading." },
        { t:"OTE Within FVGs", v:"default", body:"The OTE (Optimal Trade Entry) is the highest-probability entry zone WITHIN an FVG.\n\nApply Fibonacci to the FVG range:\n• 0.0 — Bottom of FVG\n• 0.5 — Consequent Encroachment (CE) — 50% midpoint, key reaction level\n• 0.618 — OTE ZONE BEGINS\n• 0.705 — Golden Fibonacci ratio\n• 0.786 — OTE ZONE ENDS\n• 1.0 — Top of FVG\n\nEntering at 62–79% of the FVG gives you:\n• The tightest possible stop loss\n• Maximum distance to your profit target\n• Best achievable risk-to-reward ratio\n\nThis is how professional traders achieve 1:8 and 1:10 risk-reward ratios. Precision entry is everything in ICT." },
        { t:"Inverse FVGs & CE", v:"default", body:"INVERSE FVG:\nAfter price fills an FVG completely and then moves away with conviction, that FVG FLIPS polarity:\n• Old bullish FVG → Bearish Inverse FVG (now resistance)\n• Old bearish FVG → Bullish Inverse FVG (now support)\nInverse FVGs provide some of the most precise entry and exit levels on any chart.\n\nCONSEQUENT ENCROACHMENT (CE):\nThe exact 50% midpoint of any FVG. Price commonly reacts at the CE as a first reaction point before either completing the full gap fill or reversing.\n\nUse CE for: partial profit targets, refining your entry, and confirming that an FVG is being respected by price." },
        { t:"FVGs Across All Markets", v:"default", body:"FOREX: 15M and 1H FVGs during London and NY killzones. An FVG formed AFTER a liquidity sweep = highest probability fill setup.\n\nFUTURES (ES/NQ): RTH FVGs are far more reliable than overnight session FVGs. Pre-market FVGs frequently fill at or right after the 9:30 NY open. Use 5M FVGs for precision entries during NY AM killzone.\n\nOPTIONS: Use Daily FVGs to time your entries. An unfilled Daily FVG is a strong price magnet — buy options in the direction of the draw toward the FVG.\n\nCRYPTO: 4H FVGs on Bitcoin and ETH work remarkably well. Manipulation moves in crypto create textbook FVGs that fill with high precision." },
      ]},
      { id:"m7", icon:"⚖️", title:"Premium & Discount", dur:"50 min", lessons:[
        { t:"The Dealing Range", v:"pd", body:"The Dealing Range is ICT's framework for identifying whether price is CHEAP (Discount) or EXPENSIVE (Premium).\n\nHow to build it:\n1. Identify a significant swing — from a major swing low to a major swing high\n2. Apply Fibonacci 0 to 1 across that range\n3. The 50% level (equilibrium) divides the entire range\n\nABOVE 50% = PREMIUM: Price is expensive. Institutions SELL here.\nBELOW 50% = DISCOUNT: Price is cheap. Institutions BUY here.\n\nThe golden rule: ONLY buy in Discount. ONLY sell in Premium.\n\nTrading in Premium when trying to buy — or in Discount when trying to sell — puts you directly against smart money positioning every single time." },
        { t:"OTE Fibonacci Levels", v:"default", body:"ICT's complete Fibonacci framework for the Dealing Range:\n• 0.0 — Swing low anchor point\n• 0.236 — Minor reaction level, generally weak\n• 0.382 — Shallow retracement, still in Premium for long entries\n• 0.5 — Equilibrium (CE of the entire range)\n• 0.618 — OTE ZONE BEGINS — price is now in Discount for long entries\n• 0.705 — The golden ratio level — highest single-point probability\n• 0.786 — OTE ZONE ENDS — deepest discount entry point\n\nExtension profit targets:\n• 1.272 — First extension target\n• 1.618 — Second target (the classic golden ratio)\n• 2.0 — Maximum extension for major impulsive moves" },
        { t:"PD Arrays Applied", v:"default", body:"FOREX swing trades: Apply Dealing Range to the Daily chart swing. Look for 4H OBs and FVGs within the Discount zone (62–79%) for long entries. Bearish: look for OBs and FVGs in Premium zone.\n\nFUTURES (ES/NQ): Use the previous day's RTH range as your intraday dealing range. The 50% of prior day = equilibrium. Best intraday longs below 38.2%, best shorts above 61.8%.\n\nOPTIONS: Never buy calls when underlying is in Premium — you are overpaying for overpriced options. Buy calls in Discount. Buy puts in Premium. Sell credit spreads against the current Premium/Discount bias.\n\nCRYPTO: Bitcoin and ETH respect Dealing Ranges on 4H and Daily timeframes with surprising consistency." },
      ]},
      { id:"m8", icon:"⏰", title:"Killzones & Timing", dur:"55 min", lessons:[
        { t:"The Four Killzones", v:"sessions", body:"Markets operate on an ALGORITHM. Timing your entries correctly is as important as finding the right price levels.\n\n• ASIA (20:00–00:00 NY): Range building phase. Mark the Asia high and low — one or both WILL be swept before or during London. Do not trade reversals during Asia session.\n• LONDON (02:00–05:00 NY): First major institutional move. Often creates the manipulation that traps traders before NY runs in the true direction.\n• NY AM (07:00–10:00 NY): The crown jewel. Highest institutional participation. Best OBs. Best FVGs. Your primary trading window.\n• NY PM (13:30–16:00 NY): End-of-day moves. Can be continuation or sharp reversal. Be more selective here." },
        { t:"ICT Silver Bullet Strategy", v:"silver", body:"The Silver Bullet is ICT's most celebrated intraday strategy. Three windows per day:\n• London: 03:00–04:00 NY\n• AM Session: 10:00–11:00 NY\n• PM Session: 14:00–15:00 NY\n\nSetup within ANY window:\n1. Confirm HTF bias BEFORE the window opens\n2. Watch the 1-minute chart during the window\n3. Look for a 1M LIQUIDITY SWEEP (stop hunt of a recent high or low)\n4. After the sweep, a 1M FVG forms in the REACTION direction\n5. Enter at the 50% CE of that 1M FVG\n6. Stop: beyond the sweep extreme\n7. Target: previous session's opposing liquidity pool\n\nThis single setup, traded daily with discipline, is all many professional traders ever use." },
        { t:"ICT Macros", v:"macros", body:"Within each session, ICT identified precise 20-minute windows where algorithmic price delivery occurs with high precision:\n\nLONDON MACROS: 02:33–02:53 | 04:03–04:23\nNY AM MACROS: 08:50–09:10 | 09:50–10:10 | 10:50–11:10\nNY PM MACROS: 13:10–13:30 | 15:15–15:45\n\nDuring these exact windows, price makes its most significant and precise moves. Combine macros with FVGs and OBs for elite-level entry timing.\n\nOutside these windows — wait. Patience is not a weakness in trading. Patience is a strategy." },
        { t:"Midnight Open & Reference Points", v:"default", body:"ICT's Midnight Open (00:00 NY Time) is a critical daily reference point.\n\nThe algorithm frequently returns price to the Midnight Open before making the true directional move of the day. This is a rebalancing point — algorithmic fair value.\n\nMark on your chart EVERY single trading day:\n• Midnight Open (00:00 NY)\n• Previous Day High (PDH) and Low (PDL)\n• Previous Week High (PWH) and Low (PWL)\n• Previous Month High and Low\n\nThese are IPDA reference points the algorithm consistently seeks and delivers price to. When you see price moving toward a PDH or PDL, that's the algorithm executing exactly as it's designed." },
      ]},
    ]
  },
  {
    id:3, num:"03", level:"ADVANCED", icon:"🔥", color:C.p,
    title:"Advanced ICT", subtitle:"AMD, IPDA & Full Playbook",
    desc:"ICT's most sophisticated frameworks. Power of Three (AMD), IPDA algorithmic delivery, ICT for options, and the complete institutional playbook for every market.",
    grad:"linear-gradient(135deg,#08030f,#0d0514)",
    modules:[
      { id:"m9", icon:"🎯", title:"Power of Three (AMD)", dur:"80 min", lessons:[
        { t:"AMD — The Market's True Design", v:"amd", body:"Power of Three is ICT's masterpiece concept. Every significant price move follows three distinct phases:\n\nACCUMULATION: Smart money quietly builds positions inside a consolidation range. Price looks completely directionless. Volume is low. Retail traders exit in frustration. THIS is the most critical time to be on high alert.\n\nMANIPULATION: A false breakout in the WRONG direction deliberately traps retail traders. Bulls buy the fake breakout above the range — they get trapped. Bears short the fake breakdown below — they get trapped. Institutions use both groups to fill the remainder of their position.\n\nDISTRIBUTION: The true, violent move in the real intended direction. Fast. Strong. Few re-entry opportunities. Your entire job: identify manipulation AS IT HAPPENS and enter for distribution." },
        { t:"Reading the Accumulation Phase", v:"default", body:"How to identify Accumulation:\n• Price oscillates between two clear levels — relatively tight range\n• Declining volume over time during the consolidation\n• Multiple failed breakouts in both directions, each one smaller than the last\n• Often forms during the Asia session or after a significant prior directional move\n\nWhat to do during Accumulation:\n1. Mark the range HIGH and the range LOW with horizontal lines\n2. Recognize that BOTH levels contain liquidity pools that will be targeted\n3. Expect at minimum one — often both — to be swept before the real move\n4. DO NOT enter breakouts of the accumulation range\n5. Be patient. Manipulation and distribution are always coming.\n\nMost traders enter during accumulation (boring) or manipulation (trap). ICT traders wait for distribution (profit)." },
        { t:"Identifying the Manipulation Trap", v:"default", body:"Manipulation signals — watch for these simultaneously:\n• Price breaks beyond the accumulation range boundary\n• The breakout candle has a LONG WICK back inside the range on the same candle\n• OR price closes back INSIDE the range after the initial break\n• A Fair Value Gap forms in the REVERSAL direction immediately after\n• Volume spikes sharply then recedes rapidly\n\nWhen you see these signs together:\n• The breakout was a trap — confirmed\n• Manipulation phase is complete\n• Distribution in the opposite direction is imminent\n• Prepare your entry on the first lower timeframe FVG or OB in the true direction\n\nThis recognition skill, once truly learned, cannot be unlearned." },
        { t:"Distribution Entry & Execution", v:"default", body:"Entry protocol after confirmed manipulation:\n1. Confirm reversal on 1M or 5M: look for CHoCH in the new direction\n2. Find the FIRST FVG in the distribution direction after the CHoCH\n3. Enter at the 50% CE of that FVG\n4. Stop: beyond the manipulation extreme (the false breakout wick high or low)\n5. Target: the opposing liquidity pool from the accumulation range\n\nAMD works on every timeframe simultaneously:\n• Weekly AMD → monthly bias\n• Daily AMD → weekly direction\n• 4H AMD → daily move\n• 1H AMD → session direction\n• 15M/5M AMD → intraday entry signal\n\nOnce you see AMD on every timeframe, you cannot trade any other way." },
      ]},
      { id:"m10", icon:"🤖", title:"IPDA & Algorithmic Delivery", dur:"70 min", lessons:[
        { t:"What Is IPDA?", v:"default", body:"IPDA (Interbank Price Delivery Algorithm) is ICT's framework for understanding HOW price is programmatically delivered to specific liquidity targets.\n\nPrice is NOT random. It operates on a defined algorithmic schedule — seeking specific liquidity targets within calculated lookback periods.\n\nThe IPDA runs on 20, 40, and 60 TRADING DAY cycles. Within each cycle, the algorithm seeks the highest or lowest price as its next delivery target.\n\nIf you know the IPDA range and current direction, you know WHERE price is going. You simply need to find the highest-probability entry along the way.\n\nMost retail traders think they trade markets. ICT traders know they are trading a programmable algorithm — and they have decoded its patterns." },
        { t:"20-40-60 Day Lookback", v:"default", body:"On your DAILY chart, mark all three levels:\n• 20-day High and Low (approximately 1 calendar month)\n• 40-day High and Low (approximately 2 calendar months)\n• 60-day High and Low (approximately 1 quarter)\n\nBULLISH trend — algorithm seeks in sequence:\n→ First target: 20-day High\n→ Second target: 40-day High\n→ Third target: 60-day High\n\nBEARISH trend — algorithm seeks in sequence:\n→ First target: 20-day Low\n→ Second target: 40-day Low\n→ Third target: 60-day Low\n\nThese IPDA levels are your macro profit targets. Every trade you take should align with the current IPDA target direction. When your entry matches the IPDA seek direction, the algorithm works FOR you." },
        { t:"Quarterly IPDA Ranges", v:"default", body:"IPDA operates on quarterly cycles:\n• Q1: January 1 – March 31\n• Q2: April 1 – June 30\n• Q3: July 1 – September 30\n• Q4: October 1 – December 31\n\nAt each quarter start, the algorithm REBALANCES — creating some of the most explosive moves of the entire year.\n\nMark on your Daily chart:\n• Quarterly opening price (first trading day of each quarter)\n• Previous quarter's High and Low\n• Quarterly midpoint (approximately 6 weeks into each quarter)\n\nPrice consistently:\n1. Trades away from the quarterly open to build liquidity\n2. Returns to the quarterly open to rebalance\n3. Then makes the quarter's true directional move with conviction" },
        { t:"Trading WITH the Algorithm", v:"default", body:"Full IPDA-aligned trading process:\n\n1. IDENTIFY the current IPDA target:\nWhich 20/40/60 day level is being actively sought right now?\n\n2. DETERMINE position in the Dealing Range:\nIs price currently in Premium or Discount relative to the quarterly range?\n\n3. FIND entry with AMD + OB/FVG:\nWait for the AMD manipulation phase to complete. Enter at an OB or FVG in the distribution direction.\n\n4. HOLD to the IPDA target:\nTrail your stop using lower timeframe structure.\nTake partial profits at each intermediate liquidity level along the way.\n\nWhen your trade aligns with the active IPDA seek direction, these are the trades that run 5R, 10R, even 20R without chasing or adding to positions." },
      ]},
      { id:"m11", icon:"⚙️", title:"ICT for Options", dur:"85 min", lessons:[
        { t:"Why ICT + Options = Unfair Edge", v:"default", body:"Options trading without directional edge is pure speculation. ICT provides that edge with precision.\n\nThe combination gives you:\n• DEFINED RISK: Maximum loss = premium paid. No stop hunt can ever blow your account.\n• ASYMMETRIC RETURNS: Clean ICT setups can return 3x, 5x, even 10x the premium paid.\n• NO MARGIN CALLS: Long options cannot be called in regardless of how far price moves against you.\n• LEVERAGE WITHOUT UNLIMITED RISK: Control large notional positions with relatively small capital.\n\nThe complete strategy: use ICT to identify WHERE price is going (OB, FVG, liquidity pool) and WHEN it will get there (killzone, macro, AMD phase), then express that view through options contracts.\n\nICT gives you the map. Options give you the optimal vehicle." },
        { t:"Strike Selection Using ICT", v:"default", body:"Using a Daily Bullish Order Block setup:\n1. Identify the OB zone on Daily or 4H chart\n2. Confirm bullish HTF bias (structure, IPDA seeking highs)\n3. Wait for price to enter the OB zone (discount within the OB)\n4. Select your options strike:\n   • ATM: highest delta, most responsive — use for high-conviction OB setups\n   • Slightly OTM: more leverage, lower cost — use when OB is deep in discount\n   • ITM: most conservative, highest probability — use for swing trades\n5. Expiration: MINIMUM 2–3 weeks out. Longer = more time for ICT target.\n6. Profit target: the next liquidity pool or FVG above\n7. Invalidation: OB violated → exit position immediately, no hesitation" },
        { t:"Vertical Spreads with ICT Targets", v:"default", body:"Combine ICT precision with defined-risk spread strategies:\n\nBULL CALL SPREAD (bullish ICT setup):\n• BUY: ATM or OTM call at the OB entry level\n• SELL: OTM call at your ICT profit target (next liquidity pool above)\n• Max profit = spread width − net premium paid\n• Max loss = net premium paid — completely defined\n\nBEAR PUT SPREAD (bearish ICT setup):\n• BUY: ATM or OTM put at the bearish OB entry level\n• SELL: OTM put at your ICT downside target\n• Same structure — defined risk, defined maximum reward\n\nICT tells you EXACTLY where to place the short strike: at the next institutional liquidity pool. This turns ICT precision directly into optimal spread architecture." },
        { t:"0DTE Silver Bullet Options", v:"default", body:"The most aggressive ICT options application. EXPERIENCED TRADERS ONLY.\n\nSetup: NY AM Silver Bullet window (10:00–11:00 NY) on SPY or QQQ with same-day expiration options.\n\nFull execution protocol:\n1. Pre-market: confirm HTF bias (clearly bullish or bearish)\n2. Mark key levels: PDH, PDL, overnight session high and low\n3. At 10:00 NY: switch to the 1-minute chart\n4. Wait for a clear 1M liquidity sweep (stop hunt)\n5. After the sweep, identify the 1M FVG forming in the reaction direction\n6. BUY ATM 0DTE options at the CE (50%) of the 1M FVG\n7. Target: 2–3× the premium paid\n8. Hard stop: if FVG is violated from the wrong side → EXIT immediately\n\nPOSITION SIZE: Maximum 1% of total account on any single 0DTE trade.\nPREREQUISITE: 3+ months of profitable Silver Bullet trading on forex or futures first." },
      ]},
      { id:"m12", icon:"📊", title:"Advanced Futures Trading", dur:"65 min", lessons:[
        { t:"Futures Specifics for ICT Traders", v:"default", body:"Futures markets have unique characteristics that enhance ICT trading:\n\n• CONTINUOUS PRICE ACTION: Index futures trade nearly 24/7. Cleaner algorithmic price delivery than forex.\n• RTH vs ETH: Regular Trading Hours (09:30–16:00 NY) OBs and FVGs are FAR more reliable than overnight session OBs.\n• POINT VALUES: ES = $50/point | MES (micro ES) = $5/point | NQ = $20/point | MNQ (micro NQ) = $2/point. Always start with micros.\n• MARGIN: Futures require margin deposits — understand day trading margins versus overnight margins before going live.\n• EXPIRATION: Futures contracts expire quarterly. Always roll to the next contract before expiration." },
        { t:"ES & NQ Daily ICT Routine", v:"default", body:"Professional ICT routine for trading ES or NQ:\n\nPRE-MARKET (8:00–9:25 NY):\n1. Mark PDH (Previous Day High) and PDL (Previous Day Low)\n2. Mark the overnight session high and low\n3. Identify any unfilled RTH FVGs from prior trading days\n4. Determine bias: is the IPDA algorithm currently seeking highs or lows?\n5. Note the AMD pattern that is forming in overnight session\n\nAT THE OPEN (9:30 NY):\n• Watch for a sweep of the overnight high or low in the first 5–15 minutes\n• After the sweep, look for a 5M FVG forming in the opposite direction\n• This NY open setup is one of ICT's most reliable and repeatable intraday patterns\n\nPRIMARY TRADE: Silver Bullet 10:00–11:00 NY only" },
        { t:"COT Data + ICT Confluence", v:"default", body:"Commitment of Traders (COT) report: released every Friday by the CFTC for the prior Tuesday's positioning data. Free at CFTC.gov.\n\nThree categories to understand:\n• COMMERCIAL TRADERS: Banks and corporations hedging actual business exposure. THESE ARE SMART MONEY. Net long → bullish bias. Net short → bearish bias.\n• LARGE SPECULATORS: Hedge funds and trend followers. When extremely one-sided → potential contrarian reversal signal.\n• SMALL SPECULATORS: Retail traders. Almost always positioned on the wrong side at major extremes.\n\nUsing COT with ICT:\n1. Check the weekly COT report for commercial trader positioning\n2. Commercials heavily net long → ICT bullish bias confirmed on D1 and H4\n3. Find ICT Order Blocks and FVGs in the long direction\n4. Enter on a bullish ICT setup during the NY AM killzone\n\nCOT + HTF ICT OB alignment = the highest-conviction futures setups available anywhere." },
      ]},
    ]
  },
  {
    id:4, num:"04", level:"EXPERT", icon:"👑", color:C.y,
    title:"Professional System", subtitle:"Risk, Psychology & Scaling",
    desc:"The final frontier. Professional risk management, trading psychology mastery, a complete trading plan template, and the full roadmap from retail trader to funded professional.",
    grad:"linear-gradient(135deg,#0d0a00,#120c00)",
    modules:[
      { id:"m13", icon:"🛡️", title:"Risk Management", dur:"60 min", lessons:[
        { t:"The One Rule That Saves Accounts", v:"risk", body:"Risk management is not optional — it is THE single skill separating profitable traders from blown accounts.\n\nTHE ONE RULE: Never risk more than 1–2% of your total account on any single trade.\n\nThe math of survival:\n• At 1% risk → you need 50 consecutive losses to lose 50% of your account. That will NEVER happen with proper ICT setup selection and discipline.\n• At 5% risk (what most beginners use) → just 20 losses = account completely gone.\n\nProtect capital FIRST. Profits come automatically when capital survives long enough for the edge to play out.\n\nEvery professional trader you've ever heard of follows some version of the 1–2% rule. It is not a suggestion." },
        { t:"Position Sizing Formula", v:"default", body:"Universal position sizing formula:\nPosition Size = (Account × Risk%) ÷ (Stop Distance × Instrument Value)\n\nFOREX Example:\n• Account: $10,000 | Risk: 1% = $100\n• Stop loss: 15 pips on EUR/USD\n• Standard lot pip value: $10 per pip\n• Calculation: $100 ÷ (15 × $10) = 0.67 lots → round down to 0.6 lots\n\nFUTURES Example:\n• Account: $25,000 | Risk: 1% = $250\n• Stop loss: 8 points on ES | ES point value: $50\n• Calculation: $250 ÷ (8 × $50) = 0.625 → trade 1 MES micro contract\n\nOPTIONS Example:\n• Account: $10,000 | Risk: 1% = $100\n• Buy 1 option contract at $1.00 premium = $100 total cost = exactly 1% risk\n\nCalculate your position size BEFORE every single entry. Without exception. Every time." },
        { t:"ICT Stop Loss Placement", v:"default", body:"ICT stops are placed at the level that INVALIDATES the setup — never at an arbitrary fixed distance.\n\nBULLISH ORDER BLOCK STOP:\n→ 3–5 pips BELOW the OB candle's low\n→ If price closes below the entire OB, the setup is invalid. Exit cleanly.\n\nFVG STOP:\n→ BELOW the ENTIRE Fair Value Gap (not just below your entry point)\n→ The complete gap must hold for the setup to remain valid\n\nSILVER BULLET STOP:\n→ Below the very low of the 1-minute liquidity sweep extreme\n\nAMD DISTRIBUTION STOP:\n→ Beyond the manipulation extreme — the false breakout wick high or low\n\nCRITICAL RULES:\n• Never move stops AGAINST your position to 'give it more room'\n• Never tighten stops to breakeven before 1R has been reached in your favor\n• ICT setups genuinely need room to breathe — too-tight stops get hit by noise" },
        { t:"Drawdown Rules — Non-Negotiable", v:"default", body:"Every professional trader has hard stops on their own trading activity. These rules SAVE accounts.\n\nDAILY LOSS LIMIT (3%): Stop ALL trading for the session.\n→ Close the platform completely. Walk away. Return tomorrow fresh and clear-headed.\n\nWEEKLY LOSS LIMIT (6%): Stop trading for the rest of the calendar week.\n→ Review all trades. Find what went wrong. Do NOT revenge trade under any circumstances.\n\nMONTHLY LIMIT (10% loss): CUT POSITION SIZE IN HALF for the entire following month.\n→ Something in your process is broken. Smaller size limits the damage while you diagnose the issue.\n\nACCOUNT DRAWDOWN (20% from peak): STOP TRADING FOR ONE FULL MONTH.\n→ Full review, return to paper trading, and re-education before returning to live trading.\n\nThese rules feel completely unnecessary until the specific day they save your account. Set them now." },
      ]},
      { id:"m14", icon:"🧠", title:"Trading Psychology", dur:"55 min", lessons:[
        { t:"The Psychological Cycle", v:"default", body:"The two paths every single trader faces:\n\nPATH 1 (Most traders — 90%):\nExcitement → Early wins → Overconfidence → Oversized position → Catastrophic loss → Shock → Revenge trading → Account blow-up → Quit forever\n\nPATH 2 (NVTS-trained traders):\nEducation → Paper trading → Small real account → Losses AND wins → Learning from both → Consistent process → Scale up carefully → Long-term profitability\n\nThe ONLY difference between these two outcomes: written rules, consistent journaling, and unshakeable discipline.\n\nThe market is the most sophisticated psychological testing environment ever created by human beings. It will find every single emotional weakness you possess and exploit it repeatedly. The traders who survive long-term are not the smartest — they are the most disciplined." },
        { t:"The Professional Mindset", v:"default", body:"Five mindset principles that separate professional traders from retail:\n\n1. THINK IN PROBABILITIES: Your setup wins 65% of the time. That means 35 out of every 100 trades LOSE. A losing trade executed perfectly according to plan IS a successful trade.\n\n2. JUDGE PROCESS NOT OUTCOME: The market decides the outcome. YOU decide the process. Focus entirely on what you can control.\n\n3. NO TRADE IS GUARANTEED: Even perfect ICT setups sometimes fail. Risk management protects you when certainty becomes disaster.\n\n4. THINK IN R-MULTIPLES: 'I made 3R today' — not 'I made $300.' Detach from dollar amounts entirely.\n\n5. EGO IS YOUR GREATEST ENEMY: The need to be right causes more trading losses than bad analysis ever will. Being wrong and exiting cleanly is a genuine professional skill." },
        { t:"Eliminating the Four Emotional Killers", v:"default", body:"The four emotions that consistently destroy trading accounts:\n\n1. FOMO (Fear of Missing Out):\nYou missed the perfect entry. The trade runs without you. You chase it.\nSOLUTION: 'There is ALWAYS another setup coming.' If you missed the valid entry, the trade simply does not exist for you.\n\n2. REVENGE TRADING:\nAfter a loss, you urgently need to make it back on the very next trade.\nSOLUTION: Daily loss limit (3%). When it's hit, the platform closes. Non-negotiable. Zero exceptions.\n\n3. OVER-TRADING:\nTaking 12 trades in one day because boredom feels like opportunity.\nSOLUTION: Maximum 2–3 high-quality trades per day rule. Quality always dominates quantity.\n\n4. PREMATURE EXITS:\nCutting winning trades at 1R out of fear they will reverse.\nSOLUTION: Set your exact target BEFORE entry. Honor it without deviation. Trust your analysis completely." },
        { t:"The Trading Journal", v:"default", body:"The trading journal is your single most valuable tool for sustained improvement. Without it, you will repeat the same mistakes indefinitely.\n\nMinimum entry for EVERY trade without exception:\n• Date, exact time, and session (London/NY AM/NY PM)\n• Instrument and specific pair or contract\n• Setup type (Silver Bullet / OB / FVG / AMD / other)\n• HTF bias and the specific reasoning for it\n• Screenshot BEFORE entry — fully annotated with your analysis\n• Entry price, stop loss, profit target, position size, dollar risk\n• Final result (win / loss / breakeven / partial)\n• Screenshot AFTER close — fully annotated\n• What you did absolutely RIGHT on this trade\n• What you did WRONG or could improve\n• One-sentence lesson learned\n\nReview your entire journal every single week. Most traders discover 2–3 recurring mistakes that account for 80% of all their losses. Identify those specific mistakes and fix them first." },
      ]},
      { id:"m15", icon:"📋", title:"Your Trading Plan", dur:"70 min", lessons:[
        { t:"Pre-Market Analysis Routine", v:"default", body:"Every trading day BEFORE you open a chart with the intention to trade:\n\n1. CHECK ECONOMIC CALENDAR: Any high-impact news events today? (NFP, CPI, FOMC, ECB rate decisions). If yes, avoid trading 30 minutes before and after these releases.\n\n2. MARK HTF LEVELS on Daily and H4 charts:\n   • All relevant Order Blocks (bullish and bearish)\n   • All unfilled Fair Value Gaps\n   • Previous Day High (PDH) and Previous Day Low (PDL)\n   • Previous Week High (PWH) and Previous Week Low (PWL)\n   • All Equal Highs (EQH) and Equal Lows (EQL)\n\n3. DETERMINE YOUR BIAS: Clearly bullish or clearly bearish? Write it down with your specific reasoning.\n\n4. IDENTIFY IPDA TARGET: Which 20/40/60-day level is currently being sought?\n\n5. PLAN YOUR SESSION: Which specific killzone will you trade today?\n\n6. SET PRICE ALERTS at every key level you've identified.\n\nTotal time required: 20–30 minutes maximum. Done BEFORE markets open. Non-negotiable every day." },
        { t:"Trade Entry Checklist", v:"checklist", body:"Before EVERY single trade entry, run through this complete checklist:\n\n✅ Higher timeframe (D1/H4) bias is clearly defined and aligned with my trade direction\n✅ I am currently inside a valid killzone (London, NY AM, NY PM, or Silver Bullet window)\n✅ There has been a clear, confirmed liquidity sweep (stop hunt)\n✅ An Order Block OR Fair Value Gap is present as specific entry confirmation\n✅ Price is in Premium zone (for shorts) or Discount zone (for longs)\n✅ My risk-to-reward ratio is minimum 1:2 — prefer 1:3 or better\n✅ My exact position size has been calculated at 1–2% risk\n✅ My stop loss is placed at the specific invalidation level — not arbitrary\n✅ I have NOT yet hit my daily loss limit for today\n\nIF ANY SINGLE BOX IS UNCHECKED → DO NOT TAKE THE TRADE.\nAnother valid setup will always come. Patience preserves capital." },
        { t:"Trade Management Protocol", v:"default", body:"How to manage a winning trade without emotion:\n\nCONSERVATIVE approach (recommended for beginners):\n→ Take your complete profit at the first identified target (1:2 RR minimum). Simple. Consistent. Build confidence and a track record.\n\nSTANDARD approach (for intermediate traders):\n→ Close 50% of position at first target (1:2 RR)\n→ Move stop loss to breakeven on the remaining 50%\n→ Let the remaining position run to second target (1:4–1:6 RR)\n\nAGGRESSIVE approach (for advanced traders only):\n→ Close 33% at first target\n→ Close 33% at second target\n→ Trail stop on final 33% for maximum profit capture\n\nCRITICAL: NEVER move your stop loss against your position.\nNEVER exit a winning trade solely because you feel nervous.\nYour pre-defined plan was made without emotional pressure. Honor it." },
        { t:"Building Your Complete Trading Plan", v:"default", body:"Your personal trading plan must address every single pillar:\n\n• MARKETS TRADED: Which specific instruments? Maximum 2–3 to start.\n• TIMEFRAMES: What is your analysis timeframe? What is your entry timeframe?\n• SESSIONS: Which specific killzone(s) do you trade each day?\n• SETUPS: What specific setups qualify for entry? List every one explicitly.\n• ENTRY RULES: Exact conditions that ALL must be simultaneously met.\n• RISK RULES: Percentage per trade, daily loss limit, weekly loss limit.\n• POSITION SIZING: How do you calculate size for each instrument?\n• EXIT RULES: Where exactly do you take partials? What triggers full exit?\n• REVIEW SCHEDULE: When specifically do you journal and review trades?\n• SCALING PLAN: What measurable milestone triggers position size increase?\n\nWrite every pillar down in detail. Date it. Sign it like a legal contract with yourself.\n\nThe plan is your trading business. Deviate from it and you are not trading — you are gambling." },
      ]},
      { id:"m16", icon:"🚀", title:"Scaling to Profitability", dur:"65 min", lessons:[
        { t:"The Three-Phase Growth Roadmap", v:"default", body:"PHASE 1 — FOUNDATION (Months 1–3):\n• Paper trade EXCLUSIVELY. Zero real money involved.\n• Goal: identify ICT setups consistently and accurately — NOT profitability yet\n• Track every single paper trade in your journal with full detail\n• Success target: 3 consecutive profitable paper-trading months\n• DO NOT skip or shorten this phase regardless of how confident you feel. Ever.\n\nPHASE 2 — VALIDATION (Months 4–6):\n• Open a micro account with $500–$1,000\n• Trade absolute minimum position sizes (0.01 lots / 1 micro contract only)\n• Goal: prove your edge holds with real money and real emotional pressure\n• Success target: 3 consecutive profitable months with controlled drawdown\n\nPHASE 3 — SCALING (Month 7 and beyond):\n• Gradually increase position size — ONLY after 3 consecutive profitable months at current size\n• Track monthly P&L, win rate, and average risk-reward achieved\n• Consider prop firm challenge only when consistently profitable on personal account" },
        { t:"Prop Firm Trading with ICT", v:"default", body:"Proprietary trading firms provide you with $25K–$400K in capital to trade. They keep approximately 20% of profits. You keep approximately 80%.\n\nWhy ICT is PERFECT for prop firm challenges:\n• Prop firm rules: typically 5% daily loss limit and 8–10% overall loss limit\n• ICT at 1–2% risk per trade → you need 5+ consecutive losses to fail the daily limit\n• ICT setups: high win rate + high RR → steady, consistent account growth\n• ICT timing: 1–3 quality trades per day → never over-trading\n\nTop firms to research (always verify current terms and conditions before funding):\n• FTMO — forex, futures, crypto\n• TopStep — futures specialists\n• Apex Trader Funding — futures\n• The Funded Trader — multi-market\n\nCritical: Pass the challenge using the EXACT same approach you use on your personal account. Don't change your strategy for the challenge." },
        { t:"Multiple Income Streams", v:"default", body:"Once consistently profitable for 6+ months, consider expanding strategically:\n\n📈 FOREX: Daily and weekly cash flow. GBP/USD and EUR/USD with ICT killzones provide the most consistent setups.\n\n📊 FUTURES: Larger swing trades with significant overnight potential. ES and NQ with COT data plus ICT confluence.\n\n⚙️ OPTIONS: Premium selling in Premium zones. Defined-risk buying in Discount zones. Multiple strategies available.\n\n₿ CRYPTO: High-volatility opportunities. Bitcoin and ETH follow ICT patterns with excellent precision.\n\n🏦 PROP FIRMS: Multiple funded accounts across different firms = diversified, scalable income.\n\n📚 EDUCATION: Teach others what you've learned. Knowledge compounds exactly like interest.\n\nThe golden rule: MASTER one single instrument first. Minimum 6 months of verified consistency before adding another. Discipline at this specific stage equals generational wealth later." },
        { t:"Long-Term Vision & Consistency", v:"default", body:"The realistic, achievable numbers for a professional ICT trader:\n\nCONSERVATIVE: 5–8% per month on a $50K prop account = $2,500–$4,000 per month\nMODERATE: 10–15% per month on a $100K account = $10,000–$15,000 per month\n\nThe power of compounding:\n$10,000 account at 8% per month for 24 months = over $85,000\n\nConsistency always beats intensity in trading. 5% every single month for 2 years beats 50% one month followed by −40% the next month every time.\n\nThe traders who build lasting wealth:\n• They protect capital above every other consideration\n• They follow their written plan without deviation\n• They journal every trade religiously\n• They think in years and decades — not individual trades\n\nYou now have everything you need to succeed.\nThe market is waiting for you.\n\nNew Vizionz Trading System.\nSee the market. Trade the invisible." },
      ]},
    ]
  },
];

const QUIZZES = {
  1:[{q:"Who sits at the TOP of the market hierarchy?",opts:["Retail traders","Hedge Funds","Central Banks","Prop Firms"],ans:2},{q:"A Swing High requires what on BOTH sides?",opts:["Higher highs","Lower highs","Equal highs","Lower lows"],ans:1},{q:"Buy-Side Liquidity sits:",opts:["Below swing lows","At the 50% level","Above swing highs","Inside FVGs"],ans:2},{q:"What is the purpose of Inducement (IDM)?",opts:["Confirm the trend","Trap retail in wrong direction","Mark the OB","Set the killzone"],ans:1},{q:"Which session has the BEST ICT setups?",opts:["Asia","London","New York AM","New York PM"],ans:2}],
  2:[{q:"An Order Block is the ___ candle before an impulsive move.",opts:["First","Last opposing","Largest","Most recent"],ans:1},{q:"A bullish FVG: Candle 1 High is ___ Candle 3 Low.",opts:["Equal to","Greater than","Less than","Unrelated to"],ans:2},{q:"The OTE Fibonacci zone is:",opts:["38–50%","50–62%","62–79%","80–100%"],ans:2},{q:"The Silver Bullet AM window is:",opts:["08:00–09:00","09:30–10:30","10:00–11:00","13:00–14:00"],ans:2},{q:"Institutions BUY in the Dealing Range at:",opts:["Premium (above 50%)","Equilibrium (50%)","Discount (below 50%)","At new highs"],ans:2}],
  3:[{q:"In AMD, which phase TRAPS retail traders?",opts:["Accumulation","Manipulation","Distribution","Consolidation"],ans:1},{q:"IPDA lookback periods are:",opts:["10-20-30 days","20-40-60 days","15-30-45 days","25-50-75 days"],ans:1},{q:"Minimum recommended options expiration for ICT setups:",opts:["0DTE","1 week","2–3 weeks","3 months"],ans:2},{q:"A Breaker Block forms when:",opts:["An OB is confirmed","An OB is violated and flips","Price touches an FVG","A sweep occurs"],ans:1},{q:"COT commercial traders represent:",opts:["Retail speculators","Smart money / institutions","Trend-following funds","Central banks only"],ans:1}],
  4:[{q:"Maximum risk per trade should be:",opts:["5–10%","3–5%","1–2%","10% minimum"],ans:2},{q:"A daily trading STOP triggers at:",opts:["2 losing trades","3% daily loss","Any single loss","5% daily loss"],ans:1},{q:"Judging by PROCESS not outcome means:",opts:["Only count winning trades","A perfectly executed loss is a success","Ignore losing trades","Trade without a plan"],ans:1},{q:"Phase 2 of the growth roadmap uses:",opts:["Full-size funded account","Prop firm account","Micro account $500-$1K","Demo only"],ans:2},{q:"The FIRST step in pre-market analysis is:",opts:["Open positions immediately","Check the economic calendar","Mark Order Blocks","Set buy orders"],ans:1}]
};

const VIDEOS=[{id:"v1",course:1,title:"Session Overview & Killzones Live",dur:"12:34",desc:"Live EUR/USD walkthrough showing all four sessions. Asia range, London manipulation, NY AM real move."},{id:"v2",course:1,title:"Marking Structure on Live Charts",dur:"18:22",desc:"Step-by-step swing highs, swing lows, BOS and CHoCH on EUR/USD Daily and 4H in TradingView."},{id:"v3",course:2,title:"Finding Order Blocks in Real Time",dur:"22:15",desc:"Bullish and bearish OBs on GBP/USD across multiple timeframes. The last opposing candle live."},{id:"v4",course:2,title:"FVG + OTE Entry Technique",dur:"19:48",desc:"Live ES futures entry using FVG + OTE Fibonacci during NY AM killzone."},{id:"v5",course:3,title:"AMD Pattern Live on NQ Futures",dur:"25:10",desc:"Full AMD breakdown on NQ during London session. Accumulation, manipulation trap, distribution."},{id:"v6",course:3,title:"Silver Bullet — Three Trades One Day",dur:"16:33",desc:"Three Silver Bullet setups on GBP/USD in one day. Full setup-to-close with commentary."},{id:"v7",course:4,title:"Position Sizing in Practice",dur:"14:20",desc:"Live position sizing formula across forex and futures with different account sizes."},{id:"v8",course:4,title:"Dealing with Losing Streaks",dur:"20:05",desc:"Raw, honest discussion of how professionals handle consecutive losses. Practical techniques."}];

/* ── VISUAL COMPONENTS ── */
const Visual = ({ type, color=C.g }) => {
  if(type==="pyramid") return (
    <div style={{padding:"14px 0"}}>
      {[{l:"CENTRAL BANKS",c:"#FFD166",p:100,d:"Monetary policy & interest rates"},{l:"TIER-1 BANKS",c:C.g,p:78,d:"JPMorgan, Goldman — create liquidity"},{l:"HEDGE FUNDS",c:C.b,p:58,d:"Algorithmic strategies, block orders"},{l:"RETAIL TRADERS",c:C.r,p:40,d:"YOU — provide liquidity for above"}].map((row,i)=>(
        <div key={i} style={{display:"flex",gap:"8px",marginBottom:"7px"}}>
          <div style={{width:`${row.p}%`,background:`${row.c}18`,border:`1px solid ${row.c}40`,borderRadius:"6px",padding:"10px 14px"}}>
            <div style={{color:row.c,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.7rem",fontWeight:700}}>{row.l}</div>
            <div style={{color:"#555",fontSize:"0.7rem",marginTop:"2px"}}>{row.d}</div>
          </div>
        </div>
      ))}
    </div>
  );
  if(type==="pillars") return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",padding:"12px 0"}}>
      {[{l:"Market Structure",i:"🏗️"},{l:"Liquidity",i:"💧"},{l:"Order Blocks",i:"📦"},{l:"Fair Value Gaps",i:"⚡"},{l:"Dealing Range",i:"⚖️"},{l:"Killzones",i:"⏰"}].map((p,i)=>(
        <div key={i} style={{background:`${color}10`,border:`1px solid ${color}25`,borderRadius:"8px",padding:"14px",textAlign:"center"}}>
          <div style={{fontSize:"1.4rem",marginBottom:"6px"}}>{p.i}</div>
          <div style={{color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.63rem"}}>{p.l}</div>
        </div>
      ))}
    </div>
  );
  if(type==="instruments") return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",padding:"12px 0"}}>
      {[{n:"FOREX",i:"💱",d:"EUR/USD·GBP/USD·24/5"},{n:"FUTURES",i:"📊",d:"ES·NQ·GC·CL"},{n:"OPTIONS",i:"⚙️",d:"SPY·QQQ·Spreads"},{n:"CRYPTO",i:"₿",d:"BTC·ETH·24/7"},{n:"INDICES",i:"📉",d:"SPX·NDX·DJI"},{n:"COMMODITIES",i:"🥇",d:"Gold·Oil·Silver"}].map((ins,i)=>(
        <div key={i} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"8px",padding:"14px"}}>
          <div style={{fontSize:"1.3rem",marginBottom:"6px"}}>{ins.i}</div>
          <div style={{color:"#fff",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.68rem",marginBottom:"3px"}}>{ins.n}</div>
          <div style={{color:"#444",fontSize:"0.66rem"}}>{ins.d}</div>
        </div>
      ))}
    </div>
  );
  if(type==="sessions") return (
    <div style={{padding:"12px 0"}}>
      {[{n:"ASIA",t:"20:00–00:00",c:"#A855F7",pct:25,d:"Range building"},{n:"LONDON",t:"02:00–05:00",c:C.b,pct:70,d:"First major move"},{n:"NY AM ★",t:"07:00–10:00",c:C.g,pct:100,d:"BEST SETUPS"},{n:"NY PM",t:"13:30–16:00",c:C.y,pct:55,d:"Secondary moves"}].map((s,i)=>(
        <div key={i} style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"}}>
          <div style={{width:"72px",color:s.c,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",fontWeight:700}}>{s.n}</div>
          <div style={{flex:1,background:"rgba(255,255,255,.04)",borderRadius:"4px",height:"26px",overflow:"hidden"}}>
            <div style={{width:`${s.pct}%`,height:"100%",background:`${s.c}55`,display:"flex",alignItems:"center",paddingLeft:"8px"}}>
              <span style={{color:"#ddd",fontSize:"0.63rem"}}>{s.d}</span>
            </div>
          </div>
          <div style={{color:"#444",fontSize:"0.6rem",width:"88px",fontFamily:"'JetBrains Mono',monospace"}}>{s.t} NY</div>
        </div>
      ))}
    </div>
  );
  if(type==="liq") return (
    <div style={{background:"rgba(0,0,0,.4)",borderRadius:"10px",padding:"18px",marginTop:"12px"}}>
      <div style={{position:"relative",height:"120px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.68rem"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,borderTop:`2px dashed ${C.g}`,paddingTop:"4px"}}><span style={{color:C.g}}>💰 BUY-SIDE LIQUIDITY — Buy stops above swing highs & EQH</span></div>
        <div style={{position:"absolute",top:"30px",left:"20px",right:"20px",background:"rgba(255,255,255,.03)",borderRadius:"8px",height:"56px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{textAlign:"center"}}>
            <div style={{color:C.y,fontWeight:700,fontSize:"0.78rem"}}>PRICE RANGE</div>
            <div style={{color:"#444",fontSize:"0.66rem"}}>Smart money accumulating / distributing here</div>
          </div>
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,borderBottom:`2px dashed ${C.r}`}}><span style={{color:C.r}}>💰 SELL-SIDE LIQUIDITY — Sell stops below swing lows & EQL</span></div>
      </div>
    </div>
  );
  if(type==="fvg") return (
    <div style={{background:"rgba(0,0,0,.4)",borderRadius:"10px",padding:"18px",marginTop:"12px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
      <div style={{color:C.g,marginBottom:"10px",fontWeight:700}}>BULLISH FVG STRUCTURE</div>
      {["Candle 3 Low  ─────────────────────",`   ← FVG ZONE (gap) — enter at 50–79% →`,`Candle 1 High ─────────────────────`].map((line,i)=>(
        <div key={i} style={{color:i===1?C.g:"#555",marginBottom:"4px",padding:i===1?"6px 0":"0"}}>{line}</div>
      ))}
      <div style={{marginTop:"10px",color:"#444",borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:"8px"}}>→ Price returns to fill this gap before continuing bullish. Enter at CE (50%) or OTE (62–79%).</div>
    </div>
  );
  if(type==="pd") return (
    <div style={{background:"rgba(0,0,0,.4)",borderRadius:"10px",padding:"18px",marginTop:"12px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
      {[{l:"Swing High (1.0)",c:C.r,side:"PREMIUM — SELL ZONE"},{l:"79% — OTE End",c:C.b,side:""},{l:"70.5% — Golden",c:C.b,side:""},{l:"61.8% — OTE Start",c:C.g,side:"DISCOUNT — BUY ZONE ✓"},{l:"50% — Equilibrium",c:"#666",side:""},{l:"Swing Low (0.0)",c:"#888",side:""}].map((item,i)=>(
        <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
          <span style={{color:item.c}}>{item.l}</span>
          {item.side&&<span style={{color:item.side.includes("✓")?C.g:C.r,fontSize:"0.62rem"}}>{item.side}</span>}
        </div>
      ))}
    </div>
  );
  if(type==="ob") return (
    <div style={{background:"rgba(0,0,0,.4)",borderRadius:"10px",padding:"18px",marginTop:"12px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
      <div style={{color:C.b,marginBottom:"10px",fontWeight:700}}>BULLISH ORDER BLOCK ANATOMY</div>
      <div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
        <div style={{color:C.g,padding:"8px 12px",background:`${C.g}10`,borderRadius:"4px"}}>↑ Strong bullish impulse breaks swing high (BOS confirmed)</div>
        <div style={{color:C.b,padding:"8px 12px",background:`${C.b}20`,border:`1px solid ${C.b}50`,borderRadius:"4px"}}>📦 ORDER BLOCK — Last bearish candle before impulse. Zone = Open to Close. Enter LONG when price retraces here.</div>
        <div style={{color:"#444",padding:"6px 12px"}}>← Prior structure / context</div>
      </div>
      <div style={{marginTop:"10px",color:"#555",borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:"8px"}}>Stop: 3–5 pips below OB low | Target: next liquidity pool above (EQH/swing high)</div>
    </div>
  );
  if(type==="silver") return (
    <div style={{background:"rgba(0,0,0,.4)",borderRadius:"10px",padding:"18px",marginTop:"12px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
      <div style={{color:C.y,marginBottom:"12px",fontWeight:700,fontSize:"0.76rem"}}>🥈 SILVER BULLET WINDOWS</div>
      {[{t:"London",time:"03:00–04:00 NY",c:C.b},{t:"AM Session ★ BEST",time:"10:00–11:00 NY",c:C.g},{t:"PM Session",time:"14:00–15:00 NY",c:C.y}].map((w,i)=>(
        <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",marginBottom:"6px",background:`${w.c}12`,border:`1px solid ${w.c}30`,borderRadius:"6px"}}>
          <span style={{color:w.c}}>{w.t}</span>
          <span style={{color:"#555"}}>{w.time}</span>
        </div>
      ))}
      <div style={{marginTop:"12px",color:"#444",borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:"10px"}}>HTF bias → 1M liquidity sweep → 1M FVG forms → Enter at CE → Target opposing liquidity</div>
    </div>
  );
  if(type==="macros") return (
    <div style={{padding:"12px 0",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
      {[{t:"LONDON MACROS",items:["02:33–02:53","04:03–04:23"],c:C.b},{t:"NY AM MACROS",items:["08:50–09:10","09:50–10:10","10:50–11:10"],c:C.g},{t:"NY PM MACROS",items:["13:10–13:30","15:15–15:45"],c:C.y}].map((g,i)=>(
        <div key={i} style={{marginBottom:"14px"}}>
          <div style={{color:g.c,marginBottom:"6px",letterSpacing:"2px"}}>{g.t}</div>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
            {g.items.map((item,j)=><div key={j} style={{padding:"6px 14px",background:`${g.c}15`,border:`1px solid ${g.c}30`,borderRadius:"4px",color:"#ccc"}}>{item} NY</div>)}
          </div>
        </div>
      ))}
    </div>
  );
  if(type==="amd") return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px",marginTop:"12px"}}>
      {[{t:"ACCUMULATION",i:"📦",d:"Smart money builds positions quietly. Mark the range. Be patient.",c:"#555"},{t:"MANIPULATION",i:"🪤",d:"False breakout TRAPS retail. The real direction is OPPOSITE this move.",c:C.r},{t:"DISTRIBUTION",i:"🚀",d:"The real move begins. Enter after manipulation. Target opposing liquidity.",c:C.g}].map((ph,i)=>(
        <div key={i} style={{background:`${ph.c}12`,border:`1px solid ${ph.c}30`,borderRadius:"10px",padding:"16px",textAlign:"center"}}>
          <div style={{fontSize:"1.8rem",marginBottom:"8px"}}>{ph.i}</div>
          <div style={{color:ph.c,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",fontWeight:700,marginBottom:"6px"}}>{ph.t}</div>
          <div style={{color:"#666",fontSize:"0.7rem",lineHeight:1.4}}>{ph.d}</div>
        </div>
      ))}
    </div>
  );
  if(type==="risk") return (
    <div style={{overflowX:"auto",marginTop:"12px"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.72rem"}}>
        <thead><tr style={{borderBottom:`1px solid ${color}30`}}>
          {["Account","1% Risk","2% Risk Max"].map((h,i)=><th key={i} style={{color:[C.y,C.g,C.r][i],padding:"10px 12px",textAlign:i===0?"left":"center"}}>{h}</th>)}
        </tr></thead>
        <tbody>
          {[["$1,000","$10","$20"],["$5,000","$50","$100"],["$10,000","$100","$200"],["$25,000","$250","$500"],["$100,000","$1,000","$2,000"]].map((row,i)=>(
            <tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,.04)",background:i%2===0?"rgba(255,255,255,.015)":"transparent"}}>
              {row.map((cell,j)=><td key={j} style={{color:[C.y,C.g,C.r][j],padding:"10px 12px",textAlign:j===0?"left":"center"}}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  if(type==="checklist") return (
    <div style={{padding:"12px 0"}}>
      {[{t:"HTF bias aligned with trade direction",c:C.g},{t:"Currently in a valid Killzone",c:C.g},{t:"Clear liquidity sweep confirmed",c:C.g},{t:"Order Block OR FVG present for entry",c:C.b},{t:"Price in correct Premium or Discount zone",c:C.b},{t:"Risk-to-reward minimum 1:2",c:C.y},{t:"Position size calculated at 1–2% risk",c:C.y},{t:"Stop at the specific invalidation level",c:C.r},{t:"Daily loss limit NOT yet reached",c:C.r}].map((item,i)=>(
        <div key={i} style={{display:"flex",gap:"10px",alignItems:"center",marginBottom:"7px",padding:"8px 12px",background:"rgba(255,255,255,.02)",borderRadius:"6px",border:"1px solid rgba(255,255,255,.05)"}}>
          <span style={{color:item.c}}>✅</span>
          <span style={{color:"#ccc",fontSize:"0.81rem"}}>{item.t}</span>
        </div>
      ))}
      <div style={{color:C.r,marginTop:"10px",padding:"10px 12px",background:`${C.r}10`,borderRadius:"6px",border:`1px solid ${C.r}30`,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.7rem"}}>⛔ ANY BOX UNCHECKED → DO NOT TAKE THE TRADE</div>
    </div>
  );
  return (
    <div style={{background:`${color}08`,border:`1px solid ${color}20`,borderRadius:"10px",padding:"18px",marginTop:"10px",display:"flex",gap:"14px",alignItems:"flex-start"}}>
      <div style={{fontSize:"1.8rem",flexShrink:0}}>📊</div>
      <div>
        <div style={{color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.66rem",marginBottom:"4px",letterSpacing:"1px"}}>CHART REFERENCE</div>
        <div style={{color:"#666",fontSize:"0.81rem",lineHeight:1.6}}>Practice identifying this concept on TradingView. Use EUR/USD or GBP/USD for forex, ES/NQ for futures, SPY/QQQ for options. Real pattern recognition comes from screen time and repetition — no shortcut exists.</div>
        <div style={{color:"#333",fontSize:"0.68rem",marginTop:"8px"}}>→ Annotate your charts. Screenshot every setup. Add every observation to your journal.</div>
      </div>
    </div>
  );
};

/* ── BTN ── */
const Btn = ({ color, onClick, children, outline, small, disabled }) => {
  const [h,setH]=useState(false);
  return (
    <button onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} onClick={onClick} disabled={disabled}
      style={{padding:small?"8px 18px":"12px 28px",borderRadius:"8px",cursor:disabled?"not-allowed":"pointer",background:disabled?"#111":outline?"transparent":h?color:`${color}cc`,border:`1.5px solid ${disabled?"#333":color}`,color:disabled?"#333":outline?(h?"#000":color):"#000",fontFamily:"'Orbitron',monospace",fontSize:small?"0.67rem":"0.73rem",fontWeight:700,letterSpacing:"1px",boxShadow:h&&!disabled?`0 0 20px ${color}50`:"none",transition:"all .2s",transform:h&&!disabled?"translateY(-2px)":"none"}}>
      {children}
    </button>
  );
};

/* ── TICKER ── */
const Ticker = () => {
  const items=["EUR/USD","GBP/USD","USD/JPY","ES1!","NQ1!","GC1!","BTC/USD","ETH/USD","SPY","QQQ","ICT KILLZONE: NY AM 07:00–10:00","ORDER BLOCK","FAIR VALUE GAP","LIQUIDITY SWEEP","POWER OF THREE","SMART MONEY CONCEPT","SILVER BULLET","DEALING RANGE"];
  return (
    <div style={{background:"rgba(0,255,178,.04)",borderBottom:"1px solid rgba(0,255,178,.1)",overflow:"hidden",height:"30px",display:"flex",alignItems:"center"}}>
      <div style={{display:"flex",gap:"40px",whiteSpace:"nowrap",animation:"ticker 30s linear infinite"}}>
        {[...items,...items].map((item,i)=><span key={i} style={{color:i%3===0?C.g:i%3===1?C.b:"#333",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.64rem",letterSpacing:"1px"}}>{i%5===0?"◆":i%3===0?"▸":"·"} {item}</span>)}
      </div>
    </div>
  );
};

/* ── NAVBAR ── */
const Nav = ({ view, setView }) => (
  <nav style={{padding:"0 28px",height:"58px",display:"flex",alignItems:"center",gap:"24px",borderBottom:"1px solid rgba(255,255,255,.06)",background:"rgba(4,6,13,.97)",backdropFilter:"blur(12px)",position:"sticky",top:0,zIndex:200}}>
    <div onClick={()=>setView("home")} style={{cursor:"pointer",fontFamily:"'Orbitron',monospace",fontSize:"0.8rem",letterSpacing:"1px",flexShrink:0}}>
      <span style={{color:C.g}}>NEW </span><span style={{color:"#fff"}}>VIZIONZ </span><span style={{color:C.b}}>TRADING </span><span style={{color:C.y}}>SYSTEM</span>
    </div>
    <div style={{display:"flex",gap:"4px"}}>
      {[{l:"COURSES",v:"home"},{l:"VIDEOS",v:"videos"},{l:"COACH",v:"coach"},{l:"JOURNAL",v:"journal"}].map(ln=>(
        <button key={ln.v} onClick={()=>setView(ln.v)} style={{padding:"6px 14px",borderRadius:"6px",cursor:"pointer",background:view===ln.v?`${C.g}18`:"transparent",border:view===ln.v?`1px solid ${C.g}40`:"1px solid transparent",color:view===ln.v?C.g:"#444",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",letterSpacing:"2px",transition:"all .2s"}}>{ln.l}</button>
      ))}
    </div>
    <div style={{marginLeft:"auto",display:"flex",gap:"6px",alignItems:"center"}}>
      {COURSES.map(c=><div key={c.id} style={{width:"8px",height:"8px",borderRadius:"50%",background:c.color,animation:`pulseGlow ${1.5+c.id*.5}s ease-in-out infinite`,cursor:"pointer"}} onClick={()=>setView("home")} />)}
    </div>
  </nav>
);

/* ── LESSON VIEW ── */
const LessonView = ({ lesson, course, onBack }) => {
  const [done,setDone]=useState(false);
  return (
    <div style={{minHeight:"100vh",background:course.grad}}>
      <div style={{maxWidth:"760px",margin:"0 auto",padding:"28px 22px"}}>
        <button onClick={onBack} style={{background:"transparent",border:`1px solid ${course.color}40`,color:course.color,padding:"7px 16px",borderRadius:"6px",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.64rem",marginBottom:"24px"}}>← Back</button>
        <div style={{display:"inline-block",padding:"4px 12px",borderRadius:"20px",background:`${course.color}20`,border:`1px solid ${course.color}40`,color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",letterSpacing:"2px",marginBottom:"12px"}}>{course.level}</div>
        <h2 style={{fontSize:"clamp(1.3rem,3vw,1.9rem)",fontWeight:800,marginTop:"8px",marginBottom:"20px",lineHeight:1.2,color:"#fff"}}>{lesson.t}</h2>
        <div style={{background:"rgba(255,255,255,.03)",borderRadius:"14px",border:"1px solid rgba(255,255,255,.07)",padding:"26px",marginBottom:"20px"}}>
          {lesson.body.split("\n\n").map((para,i)=>(
            <div key={i} style={{marginBottom:"16px"}}>
              {para.split("\n").map((line,j)=>(
                <div key={j} style={{display:"flex",gap:"8px",marginBottom:line.startsWith("•")?"5px":"1px"}}>
                  {line.startsWith("•")&&<span style={{color:course.color,flexShrink:0,marginTop:"2px"}}>•</span>}
                  <p style={{fontSize:"0.96rem",lineHeight:1.82,color:"#ccc",margin:0}}>{line.startsWith("•")?line.slice(1).trim():line}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Visual type={lesson.v} color={course.color} />
        <div style={{marginTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"40px"}}>
          <label style={{display:"flex",gap:"8px",alignItems:"center",cursor:"pointer",color:"#444",fontSize:"0.82rem"}}>
            <input type="checkbox" checked={done} onChange={e=>setDone(e.target.checked)} style={{accentColor:course.color,width:"15px",height:"15px"}} />
            Mark complete
          </label>
          {done&&<div style={{color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.68rem"}}>✓ LESSON COMPLETE</div>}
        </div>
      </div>
    </div>
  );
};

/* ── MODULE VIEW ── */
const ModuleView = ({ mod, course, onBack, onLesson }) => {
  const [hov,setHov]=useState(null);
  return (
    <div style={{minHeight:"100vh",background:course.grad}}>
      <div style={{maxWidth:"820px",margin:"0 auto",padding:"28px 22px"}}>
        <button onClick={onBack} style={{background:"transparent",border:`1px solid ${course.color}40`,color:course.color,padding:"7px 16px",borderRadius:"6px",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.64rem",marginBottom:"24px"}}>← Back to Course</button>
        <div style={{display:"flex",gap:"14px",alignItems:"center",marginBottom:"6px"}}>
          <div style={{fontSize:"2rem"}}>{mod.icon}</div>
          <div>
            <div style={{color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",letterSpacing:"2px",marginBottom:"4px"}}>{course.level} · {mod.dur}</div>
            <h2 style={{fontSize:"1.5rem",fontWeight:800,color:"#fff"}}>{mod.title}</h2>
          </div>
        </div>
        <div style={{color:"#333",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.65rem",marginBottom:"28px"}}>{mod.lessons.length} lessons</div>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          {mod.lessons.map((lesson,i)=>(
            <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} onClick={()=>onLesson(lesson)}
              style={{background:hov===i?`${course.color}10`:"rgba(255,255,255,.025)",border:`1px solid ${hov===i?course.color+"50":"rgba(255,255,255,.06)"}`,borderRadius:"12px",padding:"18px 22px",cursor:"pointer",transition:"all .2s",transform:hov===i?"translateX(5px)":"none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",marginBottom:"5px"}}>LESSON {i+1}</div>
                  <div style={{color:"#fff",fontSize:"0.96rem",fontWeight:600}}>{lesson.t}</div>
                </div>
                <div style={{color:hov===i?course.color:"#222",fontSize:"1.2rem",transition:"all .2s"}}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── COURSE COVER ── */
const CourseCover = ({ course, onBack, onMod }) => {
  const [hov,setHov]=useState(null);
  const totalLessons=course.modules.reduce((a,m)=>a+m.lessons.length,0);
  const totalMins=course.modules.reduce((a,m)=>a+parseInt(m.dur),0);
  return (
    <div style={{minHeight:"100vh",background:course.grad,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-80px",right:"-80px",width:"400px",height:"400px",borderRadius:"50%",background:`radial-gradient(circle,${course.color}18 0%,transparent 70%)`,animation:"pulseGlow 5s ease-in-out infinite",pointerEvents:"none"}} />
      <div style={{padding:"22px 40px"}}><button onClick={onBack} style={{background:"transparent",border:`1px solid ${course.color}50`,color:course.color,padding:"8px 18px",borderRadius:"6px",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.64rem"}}>← All Courses</button></div>
      <div style={{padding:"10px 48px 40px",maxWidth:"960px"}}>
        <div style={{display:"inline-block",padding:"5px 14px",borderRadius:"20px",background:`${course.color}20`,border:`1px solid ${course.color}`,color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.66rem",letterSpacing:"3px",marginBottom:"20px"}}>{course.num} · {course.level}</div>
        <div style={{fontSize:"4rem",marginBottom:"14px",animation:"float 4s ease-in-out infinite"}}>{course.icon}</div>
        <h1 style={{fontSize:"clamp(2rem,5vw,3.8rem)",fontWeight:900,lineHeight:1.05,marginBottom:"10px",letterSpacing:"-1px",color:"#fff"}}>{course.title}</h1>
        <h2 style={{fontSize:"clamp(1rem,2vw,1.4rem)",color:course.color,fontFamily:"'JetBrains Mono',monospace",fontWeight:400,marginBottom:"18px"}}>{course.subtitle}</h2>
        <p style={{fontSize:"0.98rem",lineHeight:1.7,color:"#777",maxWidth:"560px",marginBottom:"32px"}}>{course.desc}</p>
        <div style={{display:"flex",gap:"36px",marginBottom:"40px",flexWrap:"wrap"}}>
          {[{n:course.modules.length,l:"Modules"},{n:totalLessons,l:"Lessons"},{n:totalMins+" min",l:"Duration"}].map((s,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{color:course.color,fontSize:"1.8rem",fontWeight:700,fontFamily:"'Orbitron',monospace"}}>{s.n}</div>
              <div style={{color:"#333",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"2px"}}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{color:"#222",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.65rem",letterSpacing:"3px",marginBottom:"16px"}}>MODULES</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"14px"}}>
          {course.modules.map((mod,i)=>(
            <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} onClick={()=>onMod(mod)}
              style={{background:hov===i?`${course.color}12`:"rgba(255,255,255,.03)",border:`1px solid ${hov===i?course.color+"60":"rgba(255,255,255,.07)"}`,borderRadius:"14px",padding:"20px",cursor:"pointer",transition:"all .25s",transform:hov===i?"translateY(-4px)":"none",boxShadow:hov===i?`0 16px 32px ${course.color}12`:"none"}}>
              <div style={{fontSize:"1.7rem",marginBottom:"10px"}}>{mod.icon}</div>
              <div style={{color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",marginBottom:"6px",letterSpacing:"1px"}}>MODULE {i+1} · {mod.dur}</div>
              <div style={{color:"#fff",fontSize:"0.97rem",fontWeight:600,marginBottom:"6px"}}>{mod.title}</div>
              <div style={{color:"#333",fontSize:"0.74rem"}}>{mod.lessons.length} lessons</div>
              {hov===i&&<div style={{marginTop:"12px",padding:"7px 14px",background:course.color,borderRadius:"6px",color:"#000",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.68rem",fontWeight:700,textAlign:"center"}}>START MODULE →</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── QUIZ ── */
const Quiz = ({ courseId, color, onClose }) => {
  const qs=QUIZZES[courseId]||[];
  const [idx,setIdx]=useState(0);
  const [sel,setSel]=useState(null);
  const [score,setScore]=useState(0);
  const [done,setDone]=useState(false);
  const q=qs[idx];
  const answer=(i)=>{
    setSel(i);
    if(i===q.ans) setScore(s=>s+1);
    setTimeout(()=>{ if(idx<qs.length-1){setIdx(i=>i+1);setSel(null);}else setDone(true); },800);
  };
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500,padding:"20px"}}>
      <div style={{background:"#080c14",border:`1px solid ${color}40`,borderRadius:"20px",padding:"36px",maxWidth:"560px",width:"100%",animation:"fadeUp .3s ease"}}>
        {done?(
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:"3rem",marginBottom:"16px"}}>{score===qs.length?"🏆":score>=3?"⭐":"📚"}</div>
            <h3 style={{color:"#fff",fontSize:"1.5rem",fontWeight:800,marginBottom:"8px"}}>Quiz Complete!</h3>
            <div style={{color,fontFamily:"'Orbitron',monospace",fontSize:"2rem",fontWeight:700,marginBottom:"8px"}}>{score}/{qs.length}</div>
            <div style={{color:"#555",marginBottom:"28px",fontSize:"0.85rem"}}>{score===qs.length?"Perfect score! You've mastered this material.":score>=3?"Good progress! Review the concepts you missed.":"Review this course section before moving forward."}</div>
            <div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap"}}>
              <Btn color={color} onClick={()=>{setIdx(0);setSel(null);setScore(0);setDone(false);}}>Retake</Btn>
              <Btn color={color} outline onClick={onClose}>Close</Btn>
            </div>
          </div>
        ):(
          <>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
              <div style={{color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.68rem"}}>{idx+1} / {qs.length}</div>
              <button onClick={onClose} style={{background:"transparent",border:"1px solid #222",color:"#444",padding:"4px 12px",borderRadius:"4px",cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem"}}>✕</button>
            </div>
            <div style={{background:"rgba(255,255,255,.06)",borderRadius:"4px",height:"4px",marginBottom:"22px"}}>
              <div style={{width:`${(idx/qs.length)*100}%`,height:"100%",background:color,borderRadius:"4px",transition:"width .3s"}} />
            </div>
            <h3 style={{color:"#fff",fontSize:"1.05rem",fontWeight:700,marginBottom:"22px",lineHeight:1.4}}>{q.q}</h3>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {q.opts.map((opt,i)=>{
                let bg="rgba(255,255,255,.03)",border="rgba(255,255,255,.08)",col="#ccc";
                if(sel!==null){if(i===q.ans){bg=`${C.g}20`;border=C.g;col=C.g;}else if(i===sel){bg=`${C.r}20`;border=C.r;col=C.r;}}
                return <button key={i} onClick={()=>sel===null&&answer(i)} style={{padding:"13px 18px",background:bg,border:`1px solid ${border}`,borderRadius:"10px",color:col,textAlign:"left",cursor:sel===null?"pointer":"default",transition:"all .2s",fontSize:"0.88rem"}}><span style={{color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.65rem",marginRight:"10px"}}>{String.fromCharCode(65+i)}.</span>{opt}</button>;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ── VIDEOS VIEW ── */
const VideosView = () => {
  const [filter,setFilter]=useState(0);
  const filtered=filter===0?VIDEOS:VIDEOS.filter(v=>v.course===filter);
  return (
    <div style={{minHeight:"100vh",padding:"32px 28px",maxWidth:"1000px",margin:"0 auto"}}>
      <h2 style={{fontSize:"1.8rem",fontWeight:800,marginBottom:"6px",color:"#fff"}}>🎬 Video Lessons</h2>
      <p style={{color:"#444",fontSize:"0.85rem",marginBottom:"24px"}}>Upload your recorded lessons to each card below.</p>
      <div style={{display:"flex",gap:"8px",marginBottom:"28px",flexWrap:"wrap"}}>
        {[{l:"All Videos",v:0},...COURSES.map(c=>({l:c.title,v:c.id}))].map((f,i)=>(
          <button key={i} onClick={()=>setFilter(f.v)} style={{padding:"7px 16px",borderRadius:"20px",cursor:"pointer",background:filter===f.v?COURSES[f.v-1]?.color||C.g:"transparent",color:filter===f.v?"#000":"#555",border:`1px solid ${filter===f.v?COURSES[f.v-1]?.color||C.g:"#333"}`,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.63rem",transition:"all .2s"}}>{f.l}</button>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"16px"}}>
        {filtered.map((v,i)=>{
          const course=COURSES.find(c=>c.id===v.course);
          return (
            <div key={i} style={{background:"rgba(255,255,255,.025)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"14px",overflow:"hidden"}}>
              <div style={{height:"140px",background:`linear-gradient(135deg,${course.color}20,#000)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",position:"relative"}}>
                📺
                <div style={{position:"absolute",bottom:"8px",right:"8px",background:"rgba(0,0,0,.8)",color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",padding:"3px 8px",borderRadius:"4px"}}>{v.dur}</div>
                <div style={{position:"absolute",top:"8px",left:"8px",background:`${course.color}20`,border:`1px solid ${course.color}40`,color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.57rem",padding:"3px 8px",borderRadius:"4px"}}>{course.level}</div>
              </div>
              <div style={{padding:"16px"}}>
                <div style={{color:"#fff",fontSize:"0.88rem",fontWeight:600,marginBottom:"8px"}}>{v.title}</div>
                <div style={{color:"#444",fontSize:"0.77rem",lineHeight:1.5,marginBottom:"14px"}}>{v.desc}</div>
                <div style={{padding:"8px 14px",background:`${course.color}15`,border:`1px solid ${course.color}30`,borderRadius:"6px",color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",textAlign:"center"}}>▶ Paste Video URL to Activate</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── JOURNAL VIEW ── */
const JournalView = () => {
  const [entries,setEntries]=useState([]);
  const [form,setForm]=useState({date:"",pair:"",setup:"",bias:"",entry:"",stop:"",target:"",size:"",result:"",rr:"",emotion:"",lesson:""});
  const [show,setShow]=useState(false);
  const [viewing,setViewing]=useState(null);
  const save=()=>{
    if(!form.date||!form.pair)return;
    setEntries(e=>[{...form,id:Date.now()},...e]);
    setForm({date:"",pair:"",setup:"",bias:"",entry:"",stop:"",target:"",size:"",result:"",rr:"",emotion:"",lesson:""});
    setShow(false);
  };
  const rc=r=>r==="WIN"?C.g:r==="LOSS"?C.r:C.y;
  const wins=entries.filter(e=>e.result==="WIN").length;
  const losses=entries.filter(e=>e.result==="LOSS").length;
  return (
    <div style={{minHeight:"100vh",padding:"32px 28px",maxWidth:"960px",margin:"0 auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"28px",flexWrap:"wrap",gap:"12px"}}>
        <div>
          <h2 style={{fontSize:"1.8rem",fontWeight:800,color:"#fff",marginBottom:"4px"}}>📓 Trade Journal</h2>
          <p style={{color:"#444",fontSize:"0.83rem"}}>{entries.length} trades logged</p>
        </div>
        <Btn color={C.g} onClick={()=>setShow(true)}>+ Log Trade</Btn>
      </div>
      {entries.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px",marginBottom:"28px"}}>
          {[{l:"Total",v:entries.length,c:C.b},{l:"Wins",v:wins,c:C.g},{l:"Losses",v:losses,c:C.r}].map((s,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,.025)",border:`1px solid ${s.c}30`,borderRadius:"12px",padding:"16px",textAlign:"center"}}>
              <div style={{color:s.c,fontSize:"1.8rem",fontWeight:700,fontFamily:"'Orbitron',monospace"}}>{s.v}</div>
              <div style={{color:"#333",fontSize:"0.68rem",letterSpacing:"2px"}}>{s.l}</div>
            </div>
          ))}
        </div>
      )}
      {entries.length===0?(
        <div style={{textAlign:"center",padding:"80px 20px",color:"#222"}}>
          <div style={{fontSize:"3rem",marginBottom:"16px"}}>📓</div>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.78rem",marginBottom:"6px"}}>No trades logged yet.</div>
          <div style={{fontSize:"0.75rem"}}>Click "+ Log Trade" to start building your edge.</div>
        </div>
      ):(
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          {entries.map((e,i)=>(
            <div key={i} onClick={()=>setViewing(e)} style={{background:"rgba(255,255,255,.025)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"12px",padding:"15px 20px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
              <div style={{display:"flex",gap:"14px",alignItems:"center",flexWrap:"wrap"}}>
                <div style={{color:"#333",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem"}}>{e.date}</div>
                <div style={{color:"#fff",fontWeight:600}}>{e.pair}</div>
                <div style={{color:C.b,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.65rem"}}>{e.setup}</div>
              </div>
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                {e.rr&&<div style={{color:C.y,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.65rem"}}>{e.rr}R</div>}
                {e.result&&<div style={{padding:"4px 12px",background:`${rc(e.result)}20`,border:`1px solid ${rc(e.result)}40`,borderRadius:"20px",color:rc(e.result),fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",fontWeight:700}}>{e.result}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
      {(show||viewing)&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500,padding:"20px",overflowY:"auto"}}>
          <div style={{background:"#080c14",border:`1px solid ${C.g}30`,borderRadius:"20px",padding:"30px",maxWidth:"560px",width:"100%",maxHeight:"90vh",overflowY:"auto",animation:"fadeUp .3s ease"}}>
            {viewing?(
              <>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                  <h3 style={{color:"#fff",fontSize:"1.1rem",fontWeight:700}}>{viewing.pair} — {viewing.date}</h3>
                  <button onClick={()=>setViewing(null)} style={{background:"transparent",border:"none",color:"#444",cursor:"pointer",fontSize:"1.2rem"}}>✕</button>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
                  {[["Setup",viewing.setup,C.b],["Bias",viewing.bias,C.p],["Entry",viewing.entry,C.y],["Stop",viewing.stop,C.r],["Target",viewing.target,C.g],["Size",viewing.size,C.y],["R:R",viewing.rr,C.b],["Result",viewing.result,rc(viewing.result)],["Emotion",viewing.emotion,"#777"]].map(([label,val,col],i)=>val&&(
                    <div key={i} style={{background:"rgba(255,255,255,.03)",borderRadius:"8px",padding:"10px 14px"}}>
                      <div style={{color:"#222",fontSize:"0.62rem",fontFamily:"'JetBrains Mono',monospace",marginBottom:"3px"}}>{label}</div>
                      <div style={{color:col,fontSize:"0.88rem",fontWeight:600}}>{val}</div>
                    </div>
                  ))}
                </div>
                {viewing.lesson&&<div style={{marginTop:"14px",padding:"14px",background:`${C.g}08`,border:`1px solid ${C.g}20`,borderRadius:"10px"}}><div style={{color:C.g,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",marginBottom:"4px"}}>LESSON LEARNED</div><div style={{color:"#ccc",fontSize:"0.84rem"}}>{viewing.lesson}</div></div>}
              </>
            ):(
              <>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                  <h3 style={{color:"#fff",fontSize:"1.1rem",fontWeight:700}}>Log New Trade</h3>
                  <button onClick={()=>setShow(false)} style={{background:"transparent",border:"none",color:"#444",cursor:"pointer",fontSize:"1.2rem"}}>✕</button>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBottom:"10px"}}>
                  {[["date","Date","date"],["pair","Pair (e.g. GBP/USD)","text"],["setup","Setup Type","text"],["bias","HTF Bias","text"],["entry","Entry Price","text"],["stop","Stop Loss","text"],["target","Take Profit","text"],["size","Position Size","text"],["rr","R:R (e.g. 1:3)","text"],["emotion","Emotional State","text"]].map(([key,label,type])=>(
                    <div key={key}>
                      <div style={{color:"#333",fontSize:"0.62rem",fontFamily:"'JetBrains Mono',monospace",marginBottom:"4px"}}>{label}</div>
                      <input type={type} value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"6px",padding:"9px 12px",color:"#fff",fontSize:"0.84rem",fontFamily:"'Exo 2',sans-serif"}} />
                    </div>
                  ))}
                </div>
                <div style={{marginBottom:"10px"}}>
                  <div style={{color:"#333",fontSize:"0.62rem",fontFamily:"'JetBrains Mono',monospace",marginBottom:"4px"}}>RESULT</div>
                  <div style={{display:"flex",gap:"8px"}}>
                    {["WIN","LOSS","BREAKEVEN"].map(r=><button key={r} onClick={()=>setForm(f=>({...f,result:r}))} style={{flex:1,padding:"9px",borderRadius:"6px",cursor:"pointer",background:form.result===r?`${rc(r)}20`:"rgba(255,255,255,.03)",border:`1px solid ${form.result===r?rc(r):"rgba(255,255,255,.07)"}`,color:form.result===r?rc(r):"#444",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.62rem",fontWeight:700}}>{r}</button>)}
                  </div>
                </div>
                <div style={{marginBottom:"20px"}}>
                  <div style={{color:"#333",fontSize:"0.62rem",fontFamily:"'JetBrains Mono',monospace",marginBottom:"4px"}}>LESSON LEARNED</div>
                  <textarea value={form.lesson} onChange={e=>setForm(f=>({...f,lesson:e.target.value}))} rows={3} style={{width:"100%",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:"6px",padding:"10px 12px",color:"#fff",fontSize:"0.84rem",fontFamily:"'Exo 2',sans-serif",resize:"vertical"}} placeholder="What did you learn from this trade?" />
                </div>
                <div style={{display:"flex",gap:"10px"}}>
                  <Btn color={C.g} onClick={save}>Save Trade</Btn>
                  <Btn color={C.g} outline onClick={()=>setShow(false)}>Cancel</Btn>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── AI COACH ── */
const CoachView = () => {
  const [msgs,setMsgs]=useState([{role:"assistant",text:"Welcome to the New Vizionz AI Trading Coach! I'm powered by Claude AI and here to answer all your ICT and SMC trading questions.\n\nAsk me anything — market structure, order blocks, fair value gaps, liquidity theory, killzones, risk management, prop firms, options strategy, and more.\n\nWhat would you like to master today?"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const endRef=useRef(null);
  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  const send=async()=>{
    if(!input.trim()||loading)return;
    const userMsg=input.trim();
    setInput("");
    setMsgs(m=>[...m,{role:"user",text:userMsg}]);
    setLoading(true);
    try {
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:"You are an expert ICT (Inner Circle Trader) and Smart Money Concepts trading coach for the New Vizionz Trading System. You have deep professional expertise in all ICT concepts: Market Structure (swing highs/lows, BOS, CHoCH, multi-timeframe analysis), Liquidity theory (buy-side/sell-side liquidity, liquidity sweeps, equal highs/lows, inducement), Order Blocks (bullish/bearish OBs, breaker blocks, mitigation blocks), Fair Value Gaps (FVG, OTE 62-79%, CE, inverse FVGs), Premium & Discount framework (dealing range, Fibonacci levels), ICT Killzones (Asia, London, NY AM, NY PM), Silver Bullet strategy (three windows, 1M FVG entry), ICT Macros (specific time windows), Power of Three AMD (Accumulation, Manipulation, Distribution), IPDA (20/40/60 day lookback, quarterly ranges), Risk Management (1-2% rule, position sizing formula, drawdown rules), Trading Psychology (mindset, journaling, emotional control), Prop firm trading (FTMO, TopStep, challenge rules), Options with ICT (strike selection, spreads, 0DTE), Futures trading (ES, NQ, COT data), Forex (sessions, pairs), and Crypto ICT applications. Give clear, practical, educational answers. Use bullet points and structure when helpful. Be encouraging and honest. Always emphasize risk management, process over profits, and patience. End responses with 'NVTS Coach ✓'.",messages:[...msgs.filter((_,i)=>i>0).map(m=>({role:m.role,content:m.text})),{role:"user",content:userMsg}]})});
      const data=await res.json();
      const reply=data.content?.find(b=>b.type==="text")?.text||"I couldn't process that request. Please try again.";
      setMsgs(m=>[...m,{role:"assistant",text:reply}]);
    }catch(e){setMsgs(m=>[...m,{role:"assistant",text:"Connection error. Please check your internet and try again."}]);}
    setLoading(false);
  };
  const suggestions=["What is an Order Block?","Explain the Silver Bullet strategy","How do I identify a liquidity sweep?","What is Power of Three (AMD)?","How do I use OTE Fibonacci?","Best killzone to trade and why?"];
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",maxWidth:"760px",margin:"0 auto",padding:"0 20px"}}>
      <div style={{padding:"24px 0 16px"}}>
        <h2 style={{fontSize:"1.6rem",fontWeight:800,color:"#fff",marginBottom:"4px"}}>🤖 AI Trading Coach</h2>
        <p style={{color:"#444",fontSize:"0.8rem"}}>Powered by Claude AI · Expert in ICT & Smart Money Concepts</p>
      </div>
      {msgs.length===1&&(
        <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"}}>
          {suggestions.map((s,i)=><button key={i} onClick={()=>setInput(s)} style={{padding:"7px 14px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.08)",borderRadius:"20px",color:"#777",fontSize:"0.74rem",cursor:"pointer",fontFamily:"'Exo 2',sans-serif",transition:"all .2s"}}>{s}</button>)}
        </div>
      )}
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"14px",paddingBottom:"16px",minHeight:"400px",maxHeight:"calc(100vh - 270px)"}}>
        {msgs.map((msg,i)=>(
          <div key={i} style={{display:"flex",justifyContent:msg.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"14px 18px",borderRadius:msg.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:msg.role==="user"?`${C.b}28`:"rgba(255,255,255,.04)",border:`1px solid ${msg.role==="user"?C.b+"40":"rgba(255,255,255,.07)"}`,color:"#ccc",fontSize:"0.87rem",lineHeight:1.72,whiteSpace:"pre-wrap"}}>
              {msg.role==="assistant"&&<div style={{color:C.g,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",marginBottom:"6px",letterSpacing:"1px"}}>NVTS COACH</div>}
              {msg.text}
            </div>
          </div>
        ))}
        {loading&&(
          <div style={{display:"flex",justifyContent:"flex-start"}}>
            <div style={{padding:"14px 18px",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"16px 16px 16px 4px",display:"flex",gap:"4px",alignItems:"center"}}>
              {[0,1,2].map(i=><div key={i} style={{width:"6px",height:"6px",borderRadius:"50%",background:C.g,animation:`pulseGlow 1s ${i*0.2}s ease-in-out infinite`}} />)}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div style={{padding:"14px 0 24px",display:"flex",gap:"10px"}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()} placeholder="Ask your ICT question..." style={{flex:1,background:"rgba(255,255,255,.04)",border:`1px solid ${C.g}30`,borderRadius:"10px",padding:"13px 18px",color:"#fff",fontSize:"0.88rem",fontFamily:"'Exo 2',sans-serif",outline:"none"}} />
        <Btn color={C.g} onClick={send} disabled={loading||!input.trim()}>Send</Btn>
      </div>
    </div>
  );
};

/* ── HOME PAGE ── */
const HomePage = ({ onCourse, setView }) => {
  const [hov,setHov]=useState(null);
  const [quiz,setQuiz]=useState(null);
  return (
    <div style={{minHeight:"100vh"}}>
      {quiz&&<Quiz courseId={quiz} color={COURSES[quiz-1].color} onClose={()=>setQuiz(null)} />}
      {/* HERO */}
      <div style={{padding:"70px 36px 50px",textAlign:"center",maxWidth:"900px",margin:"0 auto",position:"relative"}}>
        <div style={{position:"absolute",top:"20px",left:"50%",transform:"translateX(-50%)",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle,#00FFB220 0%,transparent 70%)",animation:"float 5s ease-in-out infinite",pointerEvents:"none"}} />
        <div style={{display:"inline-block",background:"linear-gradient(90deg,#00FFB230,#0099FF30,#B14FFF30)",border:"1px solid rgba(0,255,178,.2)",borderRadius:"30px",padding:"7px 22px",marginBottom:"24px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.66rem",letterSpacing:"3px",color:C.g}}>★ PROFESSIONAL TRADING EDUCATION SYSTEM</div>
        <h1 style={{fontSize:"clamp(2.4rem,7vw,5.5rem)",fontWeight:900,lineHeight:1.05,marginBottom:"18px",letterSpacing:"-2px",color:"#fff"}}>
          Master{" "}
          <span style={{background:"linear-gradient(90deg,#00FFB2,#0099FF,#B14FFF,#FFD166)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200%",animation:"shimmer 3s linear infinite"}}>ICT & SMC</span>
          {" "}Trading
        </h1>
        <p style={{fontSize:"1.05rem",color:"#555",lineHeight:1.75,maxWidth:"560px",margin:"0 auto 40px"}}>The complete 4-course system from absolute beginner to funded professional. Forex, futures, options, and crypto — all markets, one proven system.</p>
        <div style={{display:"flex",gap:"36px",justifyContent:"center",marginBottom:"56px",flexWrap:"wrap"}}>
          {[{n:"4",l:"Complete Courses"},{n:"16",l:"Modules"},{n:"60+",l:"Lessons"},{n:"6",l:"Instruments"}].map((s,i)=>(
            <div key={i} style={{textAlign:"center"}}>
              <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Orbitron',monospace",background:"linear-gradient(90deg,#00FFB2,#0099FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{s.n}</div>
              <div style={{color:"#333",fontSize:"0.7rem",letterSpacing:"2px",textTransform:"uppercase"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* COURSE CARDS */}
      <div style={{padding:"0 28px 44px",maxWidth:"1060px",margin:"0 auto"}}>
        <div style={{textAlign:"center",color:"#222",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.66rem",letterSpacing:"4px",marginBottom:"22px"}}>SELECT YOUR COURSE</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:"18px"}}>
          {COURSES.map((course,i)=>(
            <div key={course.id} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
              style={{background:hov===i?`linear-gradient(135deg,${course.color}18,${course.color}06)`:"rgba(255,255,255,.02)",border:`1px solid ${hov===i?course.color+"80":"rgba(255,255,255,.07)"}`,borderRadius:"20px",padding:"26px",transition:"all .3s cubic-bezier(.4,0,.2,1)",transform:hov===i?"translateY(-6px) scale(1.01)":"none",boxShadow:hov===i?`0 20px 40px ${course.color}15`:"none"}}>
              <div style={{fontSize:"2.6rem",marginBottom:"14px",animation:hov===i?"float 2s ease-in-out infinite":"none"}}>{course.icon}</div>
              <div style={{display:"inline-block",padding:"4px 12px",borderRadius:"20px",background:`${course.color}20`,border:`1px solid ${course.color}40`,color:course.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6rem",letterSpacing:"2px",marginBottom:"12px"}}>{course.num} · {course.level}</div>
              <h3 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:"6px",color:"#fff"}}>{course.title}</h3>
              <p style={{color:"#444",fontSize:"0.79rem",lineHeight:1.5,marginBottom:"20px"}}>{course.subtitle}</p>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                <Btn color={course.color} small onClick={()=>onCourse(course)}>ENTER →</Btn>
                <Btn color={course.color} small outline onClick={()=>setQuiz(course.id)}>Quiz</Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FEATURES */}
      <div style={{margin:"0 28px 48px",maxWidth:"1004px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"12px"}}>
          {[{i:"🤖",t:"AI Coach",d:"Ask any ICT question, get expert answers instantly",v:"coach"},{i:"📓",t:"Trade Journal",d:"Log every trade, track performance, build your edge",v:"journal"},{i:"🎬",t:"Video Lessons",d:"Upload your recorded video lessons for each module",v:"videos"},{i:"🧠",t:"Module Quizzes",d:"Test your knowledge after each course with scored quizzes",v:null}].map((f,i)=>(
            <div key={i} onClick={f.v?()=>setView(f.v):undefined} style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:"14px",padding:"20px",cursor:f.v?"pointer":"default",transition:"all .2s"}}>
              <div style={{fontSize:"1.8rem",marginBottom:"10px"}}>{f.i}</div>
              <div style={{color:"#fff",fontWeight:600,marginBottom:"5px",fontSize:"0.9rem"}}>{f.t}</div>
              <div style={{color:"#333",fontSize:"0.75rem",lineHeight:1.5}}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>
      {/* LEARNING PATH */}
      <div style={{margin:"0 28px 60px",maxWidth:"1004px",marginLeft:"auto",marginRight:"auto",background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:"20px",padding:"32px"}}>
        <h2 style={{textAlign:"center",fontSize:"1.4rem",fontWeight:700,marginBottom:"6px",color:"#fff"}}>Your Learning Path</h2>
        <p style={{textAlign:"center",color:"#333",fontSize:"0.8rem",marginBottom:"24px"}}>Complete in sequence for maximum results</p>
        <div style={{display:"flex",alignItems:"center",gap:"0",overflowX:"auto",padding:"8px 0"}}>
          {COURSES.map((c,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",flexShrink:0}}>
              <div onClick={()=>onCourse(c)} style={{textAlign:"center",padding:"14px 20px",borderRadius:"12px",background:`${c.color}10`,border:`1px solid ${c.color}25`,cursor:"pointer",minWidth:"140px"}}>
                <div style={{fontSize:"1.6rem",marginBottom:"5px"}}>{c.icon}</div>
                <div style={{color:c.color,fontFamily:"'JetBrains Mono',monospace",fontSize:"0.58rem",marginBottom:"3px"}}>{c.num} {c.level}</div>
                <div style={{color:"#fff",fontSize:"0.78rem",fontWeight:600}}>{c.title}</div>
              </div>
              {i<COURSES.length-1&&<div style={{fontSize:"1.4rem",padding:"0 10px",color:"#1a2540",flexShrink:0}}>→</div>}
            </div>
          ))}
        </div>
      </div>
      {/* FOOTER */}
      <div style={{borderTop:"1px solid rgba(255,255,255,.05)",padding:"20px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
        <div style={{fontFamily:"'Orbitron',monospace",fontSize:"0.76rem"}}><span style={{color:C.g}}>NEW </span><span style={{color:"#fff"}}>VIZIONZ </span><span style={{color:C.b}}>TRADING </span><span style={{color:C.y}}>SYSTEM</span></div>
        <div style={{color:"#1a2540",fontSize:"0.65rem",fontFamily:"'JetBrains Mono',monospace"}}>⚠ Trading involves significant risk. Educational purposes only. Past performance ≠ future results.</div>
      </div>
    </div>
  );
};

/* ── APP ROOT ── */
export default function App() {
  const [view,setView]=useState("home");
  const [course,setCourse]=useState(null);
  const [mod,setMod]=useState(null);
  const [lesson,setLesson]=useState(null);

  const resetToView=(v)=>{setView(v);setCourse(null);setMod(null);setLesson(null);};

  const styles=`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{background:#04060d;color:#e0e8ff;font-family:'Exo 2',sans-serif;overflow-x:hidden}
    ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#04060d}::-webkit-scrollbar-thumb{background:#1a2540;border-radius:3px}
    @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    @keyframes pulseGlow{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:.8;transform:scale(1.05)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  `;

  if(lesson&&mod&&course) return (<><style>{styles}</style><Nav view={view} setView={resetToView}/><Ticker/><LessonView lesson={lesson} course={course} onBack={()=>setLesson(null)}/></>);
  if(mod&&course) return (<><style>{styles}</style><Nav view={view} setView={resetToView}/><Ticker/><ModuleView mod={mod} course={course} onBack={()=>setMod(null)} onLesson={l=>{setLesson(l);}}/></>);
  if(course&&view==="course") return (<><style>{styles}</style><Nav view={view} setView={resetToView}/><Ticker/><CourseCover course={course} onBack={()=>{setCourse(null);setView("home");}} onMod={m=>setMod(m)}/></>);

  return (
    <>
      <style>{styles}</style>
      <Nav view={view} setView={resetToView}/>
      <Ticker/>
      {view==="home"&&<HomePage onCourse={c=>{setCourse(c);setView("course");}} setView={setView}/>}
      {view==="videos"&&<VideosView/>}
      {view==="coach"&&<CoachView/>}
      {view==="journal"&&<JournalView/>}
    </>
  );
}
