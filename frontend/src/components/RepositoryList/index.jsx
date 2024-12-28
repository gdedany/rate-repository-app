import { useEffect, useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import { useDebounce } from "use-debounce";
import { Searchbar } from "react-native-paper";
import theme from "../../theme";
import DropDownPicker from "react-native-dropdown-picker";

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Latest repositories",

      value: { filterBy: "CREATED_AT", orderDirection: "DESC" },
    },
    {
      label: "Highest rated repositories",
      value: { filterBy: "RATING_AVERAGE", orderDirection: "DESC" },
    },
    {
      label: "Lowest rated repositories",
      value: { filterBy: "RATING_AVERAGE", orderDirection: "ASC" },
    },
  ]);

  const { data, loading, error, refetch, fetchMore } = useRepositories({
    first: 4,
  });
  const [searchKeyword] = useDebounce(searchQuery, 500);

  const repositories = data.repositories;
  useEffect(() => {
    console.log(searchKeyword);
    refetch({ searchKeyword, ...value });
  }, [searchKeyword, value]);

  const onEndReach = () => {
    fetchMore();
  };
  return (
    <>
      <Searchbar
        style={{ backgroundColor: "#fff" }}
        mode="view"
        iconColor={theme.colors.primary}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        itemKey="label"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(val) => setValue(val)}
      />
      <RepositoryListContainer
        onEndReach={onEndReach}
        repositoryNodes={
          repositories ? repositories?.edges?.map((edge) => edge.node) : []
        }
      />
    </>
  );
};

export default RepositoryList;
