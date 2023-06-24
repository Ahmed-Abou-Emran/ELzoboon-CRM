// TODO: handleEdit

import React from "react";
import deals from "../../Data/deals.json";
import { toast } from "react-hot-toast";
import { getColumns } from "../../services/apiColumns";
import { getCards, updateCard } from "../../services/apiCards";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const DealsContext = React.createContext();

export const DealsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const [columnOrder, setColumnOrder] = React.useState(["0", "1", "2", "3"]);
  const [cards, setCards] = React.useState([]);

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: updateCard,
    onSuccess: () => {
      queryClient.invalidateQueries("cards");
    },
    onError: (error) => {
      toast.error("Error updating card: " + error.message);
    },
  });

  const { data: columns } = useQuery({
    queryKey: ["columns"],
    queryFn: getColumns,
  });

  const { data: deals } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  const memoizedData = React.useMemo(() => deals, [deals]);

  React.useEffect(() => {
    if (memoizedData) {
      setCards(memoizedData);
    }
  }, [memoizedData]);

  return <DealsContext.Provider>{children}</DealsContext.Provider>;
};
