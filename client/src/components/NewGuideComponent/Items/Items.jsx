import React, { useState } from "react";
import { filters } from "./Filters";

import "./Items.scss";

const Items = ({ items, itemsSets, setItemsSets }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);
  const [activeTag, setActiveTag] = useState("");
  const [filterTags, setFilterTags] = useState([]);
  const [itemSet, setItemSet] = useState([]);
  const [title, setTitle] = useState("");
  const [itemSets, setItemSets] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "" && filterTags.length == 0) {
      const filteredData = items.filter((item) => {
        return Object.values(item)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilteredResults(filteredData);
    } else if (searchInput !== "") {
      const filteredData = filterTags.filter((item) => {
        return Object.values(item)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items);
    }
  };

  const handleTagFilter = (itemTag) => {
    setActiveTag(itemTag);
    let tagItems = items.filter((item) => item.tags.includes(`${itemTag}`));
    setFilterTags([...tagItems]);
  };

  const handleClear = () => {
    setFilterTags([]);
    setSearchInput("");
  };

  const handleItem = (item) => {
    if (pickedItems.length < 8) {
      if (!pickedItems.includes(item)) {
        setPickedItems([...pickedItems, item]);
      } else {
        return;
      }
    }
  };

  const handleRightClick = (itemP, e) => {
    e.preventDefault();
    let pickedItemsNew = pickedItems.filter((item) => item.name !== itemP.name);
    setPickedItems([...pickedItemsNew]);
  };

  const handleTitleChange = (e) => {
    let t = e.target.value;
    setTitle(t);
  };

  const handleCreateSet = () => {
    console.log("createSet");

    if (title.length > 0 && pickedItems.length > 1) {
      setItemSet({ title: title, items: [...pickedItems] });
      setPickedItems([]);
      setTitle("");
      setItemSets([...itemSets, { title: title, items: [...pickedItems] }]);
      setItemsSets([...itemsSets, { title: title, items: [...pickedItems] }]);
    }
  };

  const handleDeleteItemSet = (itemSetD) => {
    let newItemSet = itemsSets.filter(
      (itemSet) => itemSet.title !== itemSetD.title
    );
    setItemsSets([...newItemSet]);
  };

  return (
    <>
      <div className="Items">
        <div className="Items-set">
          <input
            name="setTitle"
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />

          <button className="btn" type="button" onClick={handleCreateSet}>
            ADD Item Set
          </button>
        </div>

        <div className="Items-pickedItems">
          {pickedItems.map((item, index) => (
            <div
              className="Item-pickedItems-item"
              onContextMenu={(e) => handleRightClick(item, e)}
              key={index}
            >
              <img src={item.icon} alt={item.name} />
            </div>
          ))}
        </div>

        <div className="Items-items">
          <div className="Items-filters">
            {filters.map((filter, index) => (
              <div className="filter" key={index}>
                <p className="p-text">{filter.name}</p>
                {filter.tags.map((tag, index) => (
                  <h5 onClick={() => handleTagFilter(tag)} key={index}>
                    {tag}
                  </h5>
                ))}
              </div>
            ))}
          </div>

          <div className="Items-content">
            <div className="Items-content-input">
              {/* <p className="p-text">Item Search</p> */}
              <input onChange={handleChange} value={searchInput} />
              <button type="button" onClick={handleClear} className="btn">
                CLEAR
              </button>
            </div>
            <div className="Items-content-item">
              {filterTags.length === 0 ? (
                <>
                  {searchInput == "" ? (
                    <>
                      {items.map((item, index) => (
                        <div
                          className="item"
                          onClick={() => handleItem(item)}
                          key={index}
                        >
                          <img src={item.icon} alt={item.name} />
                          <p>{item.basePrice}</p>
                          <h5>{item.name}</h5>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {filteredResults.map((item, index) => (
                        <div
                          className="item"
                          onClick={() => handleItem(item)}
                          key={index}
                        >
                          <img src={item.icon} alt={item.name} />
                          <p>{item.basePrice}</p>
                          <h5>{item.name}</h5>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ) : (
                <>
                  {searchInput == "" ? (
                    <>
                      {filterTags.map((item, index) => (
                        <div
                          className="item"
                          onClick={() => handleItem(item)}
                          key={index}
                        >
                          <img src={item.icon} alt={item.name} />
                          <p>{item.basePrice}</p>
                          <h5>{item.name}</h5>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {filteredResults.map((item, index) => (
                        <div
                          className="item"
                          onClick={() => handleItem(item)}
                          key={index}
                        >
                          <img src={item.icon} alt={item.name} />
                          <p>{item.basePrice}</p>
                          <h5>{item.name}</h5>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {itemsSets && (
        <>
          {itemsSets.map((itemSet, index) => (
            <div className="Items" key={index}>
              <div className="Items-setter">
                <div className="setter-p">
                  <p>{itemSet.title}</p>
                </div>
                <div className="Items-pickedItemsss">
                  {itemSet.items && (
                    <>
                      {itemSet.items.map((item, index) => (
                        <div className="Item-pickedItems-items" key={index}>
                          <img src={item.icon} alt={item.name} />
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="setter-btn">
                  <button
                    type="button"
                    onClick={() => handleDeleteItemSet(itemSet)}
                  >
                    Delete Item Set
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Items;
