import { memo } from "react";
import "../App.css";

export const FlowingText = memo(function FLowingText() {
  const codeSnippets = [
    <>
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">add</span> ={" "}
      <span className="text-yellow-300">(a: number, b: number)</span> =&gt;{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">return</span> a + b;
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">enum</span>{" "}
      <span className="text-green-400">Status</span> {"{"}
      <br />
      &nbsp;&nbsp;Pending = <span className="text-pink-400">'PENDING'</span>,
      <br />
      &nbsp;&nbsp;Completed = <span className="text-pink-400">'COMPLETED'</span>
      ,
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">{"{ createSlice }"}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'@reduxjs/toolkit'</span>;
      <br />
      <br />
      <span className="text-purple-400">const</span> counterSlice = createSlice(
      {"{ "}
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">name</span>:{" "}
      <span className="text-pink-400">'counter'</span>,
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">initialState</span>: 0,
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">reducers</span>: {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">increment</span>:
      (state) =&gt; state + 1
      <br />
      &nbsp;&nbsp;{"}"}
      <br />
      {"});"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">{"{ Routes, Route }"}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'react-router-dom'</span>;
      <br />
      <br />
      <span className="text-blue-400">{"<Routes>"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-400">
        {"<Route path='/' element={<Home />} />"}
      </span>
      <br />
      <span className="text-blue-400">{"</Routes>"}</span>
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">{"{ z }"}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'zod'</span>;
      <br />
      <span className="text-purple-400">const</span> schema = z.object({"{"}
      <br />
      &nbsp;&nbsp;name: z.string(),
      <br />
      &nbsp;&nbsp;age: z.number().min(18),
      <br />
      {"});"}
    </>,

    <>
      <span className="text-purple-400">interface</span>{" "}
      <span className="text-green-400">User</span> {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">name</span>:{" "}
      <span className="text-pink-400">string</span>;
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">age</span>:{" "}
      <span className="text-pink-400">number</span>;
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">async</span>{" "}
      <span className="text-purple-400">function</span>{" "}
      <span className="text-blue-400">fetchUser</span>() {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">const</span> res ={" "}
      <span className="text-blue-400">await</span> fetch(
      <span className="text-green-400">'/api/user'</span>);
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">return</span>{" "}
      <span className="text-blue-400">await</span> res.json();
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">import</span> type {"{"}
      <span className="text-green-400">NextApiRequest</span>,{" "}
      <span className="text-green-400">NextApiResponse</span>
      {"}"} from <span className="text-green-400">'next'</span>; <br />
      <br />
      <span className="text-purple-400">export default</span> (
      <span className="text-blue-400">req</span>: NextApiRequest,{" "}
      <span className="text-blue-400">res</span>: NextApiResponse ) =&gt; {"{"}
      <br />
      &nbsp;&nbsp;res.status(200).json({" "}
      <span className="text-blue-400">message</span>:{" "}
      <span className="text-green-400">'Hello API'</span> );
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">express</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'express'</span>;
      <br />
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">app</span> = express();
      <br />
      <span className="text-blue-400">app.listen</span>(3000, () =&gt; {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">console.log</span>(
      <span className="text-green-400">'Server started'</span>);
      <br />
      {"});"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-blue-400">{"{ useEffect, useState }"}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'react'</span>;
      <br />
      <br />
      <span className="text-purple-400">const</span> Example = () =&gt; {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">const</span> [
      <span className="text-blue-400">data</span>,{" "}
      <span className="text-blue-400">setData</span>] ={" "}
      <span className="text-blue-400">useState</span>([]);
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">useEffect</span>(() =&gt;{" "}
      {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">fetch</span>(
      <span className="text-green-400">'/api/data'</span>)
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.then(res =&gt; res.json())
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;.then(setData);
      <br />
      &nbsp;&nbsp;{"}"}, []);
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">return</span> {"<div>"}
      {"{data.length}"} items{"</div>"};
      <br />
      {"}"}
    </>,
    <>
      <span className="text-purple-400">type</span>{" "}
      <span className="text-green-400">UserRole</span> ={" "}
      <span className="text-pink-400">'admin'</span> |{" "}
      <span className="text-pink-400">'user'</span> |{" "}
      <span className="text-pink-400">'guest'</span>;
    </>,

    <>
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">delay</span> ={" "}
      <span className="text-yellow-300">(ms: number)</span> =&gt;{" "}
      <span className="text-blue-400">new Promise</span>(res =&gt;{" "}
      <span className="text-blue-400">setTimeout</span>(res, ms));
    </>,

    <>
      <span className="text-purple-400">function</span>{" "}
      <span className="text-blue-400">isDefined</span>&lt;T&gt;(value: T |{" "}
      <span className="text-purple-400">undefined</span>): value is T {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">return</span> value !=={" "}
      <span className="text-purple-400">undefined</span>;
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">jwt</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'jsonwebtoken'</span>;
      <br />
      <span className="text-purple-400">const</span> token = jwt.sign(
      <br />
      &nbsp;&nbsp;{"{ userId: 123 }"},
      <br />
      &nbsp;&nbsp;<span className="text-green-400">'secret'</span>,
      <br />
      &nbsp;&nbsp;{"{ expiresIn: '1h' }"}
      <br />
      );
    </>,

    <>
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">ENV</span> ={" "}
      <span className="text-blue-400">process.env</span>.NODE_ENV;
      <br />
      <span className="text-blue-400">if</span> (ENV ==={" "}
      <span className="text-pink-400">'development'</span>) {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">console.log</span>(
      <span className="text-green-400">'Dev mode'</span>);
      <br />
      {"}"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-green-400">{"{ PrismaClient }"}</span> {"from "}
      <span className="text-green-400">'@prisma/client'</span>;
      <br />
      <span className="text-purple-400">const</span> prisma ={" "}
      <span className="text-blue-400">new</span> PrismaClient();
      <br />
      <span className="text-purple-400">await</span> prisma.user.findMany();
    </>,

    <>
      <span className="text-purple-400">export</span>{" "}
      <span className="text-purple-400">const</span>{" "}
      <span className="text-blue-400">config</span> = {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-blue-400">api</span>: {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
        bodyParser
      </span>: <span className="text-purple-400">false</span>,
      <br />
      &nbsp;&nbsp;{"}"},
      <br />
      {"};"}
    </>,

    <>
      <span className="text-purple-400">import</span>{" "}
      <span className="text-blue-400">{"{ createContext, useContext }"}</span>{" "}
      <span className="text-purple-400">from</span>{" "}
      <span className="text-green-400">'react'</span>;
      <br />
      <span className="text-purple-400">const</span> ThemeContext =
      createContext(<span className="text-purple-400">null</span>);
      <br />
      <span className="text-purple-400">const</span> useTheme = () =&gt;
      useContext(ThemeContext);
    </>,

    <>
      <span className="text-purple-400">declare</span>{" "}
      <span className="text-purple-400">global</span> {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-purple-400">namespace</span>{" "}
      <span className="text-green-400">NodeJS</span> {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">
        interface
      </span>{" "}
      <span className="text-green-400">ProcessEnv</span> {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-blue-400">NEXT_PUBLIC_API_URL</span>:{" "}
      <span className="text-pink-400">string</span>;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
      <br />
      &nbsp;&nbsp;{"}"}
      <br />
      {"}"}
    </>,
  ];

  const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const rows = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    direction: i % 2 === 0 ? "rightToLeft" : "leftToRight",
    speed: 10,
    snippets: shuffleArray(codeSnippets),
  }));

  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="w-full h-full">
            {rows.map((row) => (
              <div
                key={row.id}
                className={`text-base md:text-xl font-mono whitespace-nowrap flex items-center space-x-4 ${
                  row.direction === "rightToLeft"
                    ? "marquee-rtl"
                    : "marquee-ltr"
                }`}
              >
                {Array.from({ length: 10 }).map((_, idx) => (
                  <span key={`first-${idx}`} className="mx-8">
                    {row.snippets[idx % row.snippets.length]}
                  </span>
                ))}
                {Array.from({ length: 10 }).map((_, idx) => (
                  <span key={`second-${idx}`} className="mx-8">
                    {row.snippets[idx % row.snippets.length]}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
