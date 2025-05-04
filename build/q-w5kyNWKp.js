import{L as n}from"./q-BdP3xQx7.js";import{P as i}from"./q-De93whJq.js";import{k as a,b as e,j as t}from"./q-BN4e9X1X.js";const l=()=>a(i,{children:e("main",null,{class:"flex flex-col p-4 px-5 md:p-8"},[e("article",null,{class:"flex-1 flex flex-col h-full"},[e("header",null,{class:"mb-6"},[e("h1",null,{class:"text-3xl font-bold mb-2"},"Why do we need Qwik JS?",3,null),e("div",null,{class:"flex flex-wrap gap-x-3 gap-y-1 items-center"},[e("span",null,{class:"text-sm text-gray-600"},"By Soumya Deep Sarkar",3,null),e("span",null,{class:"text-sm text-gray-600"},"•",3,null),e("time",null,{class:"text-sm text-gray-600",dateTime:"2025-05-03"},"2025-05-03",3,null)],3,null)],3,null),e("div",null,{class:"prose max-w-none lg:prose-lg xl:prose-xl",dangerouslySetInnerHTML:`<h1 id="whytheheckqwikjs" tabindex="-1"><a class="header-anchor" href="#whytheheckqwikjs"></a> Why the heck Qwik JS??</h1>
<p>So lets start my first blog with something I just learnt.<br>
So when we already have so many god damn frameworks and libraries for creating  super functional UIs why do we need one more?</p>
<p><div class = "w-full flex flex-row justify-center align-middle"><Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXg3c3NmNjE1YzU4d2Jyb3RoZ3Y4a2d1anFtNDJzemJsaHc2dW9oZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tgZyQetNWP4cZjwUlx/giphy.gif" layout="constrained" alt="" class="w-60"  /></div></p>
<p>First lets discuss a bit about the current paradigms of JS frameworks/libraries.</p>
<h3 id="1csrorclientsiderendering" tabindex="-1"><a class="header-anchor" href="#1csrorclientsiderendering"></a> 1. CSR or Client Side Rendering</h3>
<p>The server sends minimal HTML and a large bundle of JavaScript. The browser downloads the JS, executes it, fetches data if needed, and then renders the UI. Think traditional React/Vue/Angular setups without SSR.</p>
<h3 id="2ssrorserversiderendering" tabindex="-1"><a class="header-anchor" href="#2ssrorserversiderendering"></a> 2. SSR or Server Side Rendering</h3>
<p>This is on the other end of the spectrum where a page is entirely generated on the server something (if you have used) like php! Yup what we once hated has resurrected. The server generates the full HTML for the requested page and sends it to the browser. The browser displays the HTML quickly. However, JavaScript is still shipped to the client to make the page interactive (a process called <strong>hydration</strong>). Think Next.js (default), Nuxt.js, Remix.</p>
<h3 id="3ssgorstaticsitegeneration" tabindex="-1"><a class="header-anchor" href="#3ssgorstaticsitegeneration"></a> 3. SSG or Static Site Generation</h3>
<p>This is the most efficient but bland of these paradigms. Generates all pages as static HTML, CSS, and JS files at build time. The server simply serves these pre-built files. Ideal for content that doesn't change frequently. Think Gatsby, Astro (static mode), or this very blog.</p>
<h3 id="4isrorincrementalstaticregeneration" tabindex="-1"><a class="header-anchor" href="#4isrorincrementalstaticregeneration"></a> 4. ISR or Incremental Static Regeneration</h3>
<p>An evolution of SSG. Pages are generated statically at build time but can be automatically regenerated on the server after a certain time interval (revalidation) or on-demand when data changes, without needing a full site redeploy. Combines static speed with dynamic updates. Popularized by Next.js.</p>
<h2 id="thecommondenominatorhydration" tabindex="-1"><a class="header-anchor" href="#thecommondenominatorhydration"></a> The Common Denominator: Hydration</h2>
<p>Notice a pattern? CSR, SSR, and ISR (for interactive parts) all generally rely on <strong>hydration</strong>. This means that after the initial HTML is displayed, the framework's JavaScript needs to run on the client to:</p>
<ol>
<li>
<p>Rebuild the component tree in memory.</p>
</li>
<li>
<p>Attach event listeners to the DOM elements.</p>
</li>
<li>
<p>Restore the application state.</p>
</li>
</ol>
<p>This duplication of work (server renders HTML, client rebuilds state and attaches listeners) is often the bottleneck for achieving truly instant interactivity, especially on slower devices or networks.</p>
<h2 id="nowwheredoesqwikfalls" tabindex="-1"><a class="header-anchor" href="#nowwheredoesqwikfalls"></a> Now where does QWIK falls?</h2>
<p><strong>TL;DR</strong></p>
<blockquote>
<p>Its neither of these. It is a whole new thing — resumability! Qwik aims for instant interactivity by delivering HTML that is already interactive, eliminating the need for client-side hydration.</p>
</blockquote>
<p>Thats the neat part. Qwik falls in neither of these paradigms. It works in an entirely different paradigm known as <em>resumability</em>. Qwik generates the HTML on the server but ships javascript files piece by piece as required. It serializes the application's state and, crucially, information about event listeners directly into the HTML. A tiny piece of JavaScript (the Qwikloader, ~1KB) acts as a global event listener.<br>
Now what does this means? This is in simplest term can be explained with an example —<br>
Imagine you have created a dashboard for your users. This dashboard also happens to have a toggle button for dark and light mode. Now in any other form of rendering/generation we need to ship some amount of JS for this button to work. But what if the user never bothers to press this button ever? What if the system default is good enough for him? Did we not just waste our users' bandwidth thereby making out website slow pointlessly? The answer is yes but any other framework or library this can not be avoided (we can with lazy loading but it would be very cumbersome) except for.... drumrolls please .... Qwik JS. Now in Qwik JS every component including the toggle button by defination lazy loaded. Which means if the user doesn't press it JS for that function would not be shipped.  This makes every thing pausable and playable as now everything is by default <em>paused</em> and <em>played</em> when required — hence the name <strong>resumability</strong>. But will it not make the button dysfunctional on first click as it will not have the required JS? Nope. Why and how lets discuss ahead.</p>
<h2 id="whyqwikisonlytrulymultithreadedjsframework" tabindex="-1"><a class="header-anchor" href="#whyqwikisonlytrulymultithreadedjsframework"></a> Why Qwik is only <em>truly</em> multi threaded JS framework?</h2>
<p>So we ended the last section with a pesky little question which I'm sure you guys also have in your mind — That if JS for reactivity is loaded at the last moment doesn't it make the part dysfunctional for some time after clicking as the client would have to load the JS files(s).<br>
So what happends under the hood is that a separate <em>service worker</em> is employed to make the fetch calls as soon the page is loaded for some components and store into browser cache. And as soon as you hover —  Qwik prefetches based on multiple heuristics like viewport visibility or link hovering (q-prefetch) — over the toggle button, javascript for the button is fetched from the server (since it is already in the browser cache it happens super qwik) and used finally when clicked. So the user sees no delay he doesn't need to download entirety of JS at once, in-fact not even on the same thread!</p>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"></a> Conclusion</h2>
<blockquote>
<p><strong>TL;DR</strong><br>
Golang:Concurrency :: Qwik JS:Lazy Loading</p>
</blockquote>
<p>Qwik is basically like Go for frontend frameworks. Why? Like if you have used any other language (say Python) either writing concurrent code is not very easy or straight up not possible in its true sense — Like python even though has ability to let you write multithreaded programs GIL makes it essentially single thread except for IO bound processes. However with Go concurrency becomes extremely easy as it treats concurrency like a first class citizen (like Python does with its <em>useless</em> type system 💀) and it feels like magic. The same is the case with lazy loading and Qwik. It feels almost like magic as how easy it becomes. Obiviously there's lot more to discuss like state management, DOM manipulation, does it also need (have) something like useEffect and so much more. But thats for another blog. See you till then. Let me know at <a href="mailto:soumyadeepsarkar2021@gmail.com">soumyadeepsarkar2021@gmail.com</a> how you liked this.</p>
`},null,3,null),e("div",null,null,"No recommendations provided",3,null)],3,null),e("aside",null,{class:"bg-card mt-4 rounded p-4 shadow md:p-6"},e("p",null,{class:"font-main text-center"},["Looking for a specific topic? Feel free to",a(n,{href:"/contact",class:"text-secondary ml-1 hover:underline",children:"request a blog post",[t]:{href:t,class:t}},3,"Hd_0"),"."],1,null),1,null)],1,null)},1,"Hd_1");export{l as s_NQsIKdiOATI};
