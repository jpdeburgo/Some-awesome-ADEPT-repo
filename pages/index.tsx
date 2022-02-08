import { Counter } from "../components/Counter"
export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Hey what's good bro?</p>
      <Counter initialCount={0}/>
    </div>
  )
}
