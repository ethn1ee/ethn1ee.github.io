import { ReactNode, createContext, useContext, useState } from "react";

type CategoryContextType = {
  currentCategory: string | null;
  toggleCurrentCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined,
);

type CategoryContextProviderProps = {
  children: ReactNode;
};

const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const toggleCurrentCategory = (category: string) => {
    if (category.toLowerCase() === "all") setCurrentCategory(null);
    else setCurrentCategory((prev) => (prev === category ? null : category));
  };

  return (
    <CategoryContext.Provider
      value={{ currentCategory, toggleCurrentCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryContextProvider",
    );
  }

  return context;
};

export { CategoryContextProvider, useCategoryContext };
