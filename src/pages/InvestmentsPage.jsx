import { apiGetInvestments } from "../api/api";
import Investments from "../components/Investments";
import Investment from "../components/Investment";

export default function InvestmentsPage() {
  const backend = apiGetInvestments();

  return (
    <Investments>
      {backend.map((item) => {
        return <Investment key={item.id} data={item} />;
      })}
    </Investments>
  );
}
