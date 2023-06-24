import supabase from "./supabase";

export const getColumns = async () => {
  const { data, error } = await supabase.from("columns").select("*");
  // .order("id", { ascending: true });

  if (error) {
    console.log(error);
    throw "Error getting Columns from database: " + error.message;
  }

  return data;
};
