import React from 'react';
import styled from 'styled-components';
import Element from '../components/Element';
import Disable from '../components/DisableElement';

const RegionSelect = ({
  allRegionData,
  ableRegionData,
  allTheaterData,
  ableTheaterData,
  selection,
  setSelection,
}) => {
  return (
    <OuterContainer>
      <TitleContainer>
        <TheaterTab>극장</TheaterTab>
        <SpecialTab>특별관</SpecialTab>
      </TitleContainer>
      <InnerContainer>
        <RegionList>
          {ableRegionData &&
            ableRegionData.map(region => {
              return (
                <Element
                  keyName="region"
                  key={region.id}
                  dataId={region.id}
                  value={region.value}
                  selection={selection}
                  setState={setSelection}
                />
              );
            })}
          {allRegionData &&
            allRegionData
              .filter(region => {
                for (const element of ableRegionData) {
                  if (region.id === element.id) return false;
                }
                return true;
              })
              .map(region => {
                return (
                  <Disable
                    key={region.id}
                    keyName="region"
                    value={region.value}
                    dataId={region.id}
                    setState={setSelection}
                  />
                );
              })}
        </RegionList>
        <TheaterList>
          {ableTheaterData &&
            ableTheaterData.map(theater => {
              return (
                <Element
                  key={theater.id}
                  keyName="theater"
                  dataId={theater.id}
                  value={theater.value}
                  selection={selection}
                  setState={setSelection}
                />
              );
            })}
          {allTheaterData &&
            allTheaterData
              .filter(theater => {
                for (const element of ableTheaterData) {
                  if (theater.id === element.id) return false;
                }
                return true;
              })
              .map(theater => {
                return (
                  <Disable
                    key={theater.id}
                    keyName="theater"
                    value={theater.value}
                    dataId={theater.id}
                    selection={selection}
                    setState={setSelection}
                  />
                );
              })}
        </TheaterList>
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 270px;
  margin: 10px 0;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0) rgba(102, 102, 102, 0.2);
  background-color: white;
  overflow-y: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  line-height: 35px;
  background-color: red;
`;

const TheaterTab = styled.div`
  display: inline-block;
  width: 80%;
  border: 1px solid rgb(85, 85, 85);
  border-bottom: 0;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.wegaboxPurple};
  background-color: white;
  text-align: center;
`;

const SpecialTab = styled(TheaterTab.withComponent('div'))`
  border: 0;
  border-bottom: 1px solid rgb(85, 85, 85);
`;

const RegionList = styled.ul`
  width: 50%;
  padding-top: 10px;
  padding-left: 15px;
  border: 1px solid transparent;
`;

const TheaterList = styled(RegionList)``;

export default RegionSelect;
