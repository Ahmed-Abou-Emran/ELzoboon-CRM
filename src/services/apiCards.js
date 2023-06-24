import supabase from "./supabase";

export const createCard = async (newCard) => {
  const { data, error } = await supabase.from("cards").insert([newCard]);

  if (error) {
    console.log(error);
    throw "Error creating card in database: " + error.message;
  }

  return data;
};

export const getCards = async () => {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .order("date", { ascending: false });
  // .order("id", { ascending: true });

  if (error) {
    console.log(error);
    throw "Error getting cards from database: " + error.message;
  }

  return data;
};

export const updateCard = async (newCard) => {
  const { data, error } = await supabase
    .from("cards")
    .update(newCard)
    .match({ id: newCard.id });

  if (error) {
    console.log(error);
    throw "Error updating card in database: " + error.message;
  }

  return data;
};

export const deleteCard = async (id) => {
  const { data, error } = await supabase.from("cards").delete().match({ id });

  if (error) {
    console.log(error);
    throw "Error deleting cabin from database: " + error.message;
  }

  return data;
};
