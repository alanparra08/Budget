import React, { useEffect, useState } from "react"
import { View, SafeAreaView, FlatList } from "react-native"
import { ScrollView } from "react-native-virtualized-view"
import { IRecord } from "../interfaces/interfacesIndex"
import { color, flexStyle, cardStyle } from "../theme/appStyle"
import ExpenseListItem from "./ExpenseListItem"
import ItemSeparator from "./ItemSeparator"
import { AP_IconButton } from "./AP_Buttons"

interface Props {
  list: IRecord[];
  limit?: number;
  edit?: boolean;
  mt?: number;
}

const ExpenseList = (props: Props): JSX.Element => {
  const { list, limit, edit = false, mt = 15 } = props

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [perPage] = useState<number>(10)
  const [maxPages, setMaxPages] = useState<number>(0)
  const [disabledPrev, setDisabledPrev] = useState<boolean>()
  const [disabledNext, setDisabledNext] = useState<boolean>()

  const onNext = () => setCurrentPage(currentPage + 1)
  const onPrevious = () => setCurrentPage(currentPage - 1)

  useEffect(() => {
    const maxPage = list?.length / perPage
    setMaxPages(Math.ceil(maxPage))
  }, [list, perPage, limit])

  useEffect(() => {
    setDisabledPrev(currentPage === 1)
    setDisabledNext((currentPage === maxPages) || (list?.length < perPage))
  }, [currentPage, maxPages])

  const Pagination = () => {
    // data={list?.slice(
    //   (currentPage - 1) * perPage,
    //   (currentPage - 1) * perPage + perPage
    // ) as any}
    return (
      <View style={{ ...flexStyle.row_between, marginHorizontal: 10, marginTop: 10 }}>
        <AP_IconButton icon="chevron-back-outline" size={30} iconColor={disabledPrev ? color.border : color.black} disabled={disabledPrev} event={onPrevious} />
        <AP_IconButton icon="chevron-forward-outline" size={30} iconColor={disabledNext ? color.border : color.black} disabled={disabledNext} event={onNext} />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: mt }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={list?.slice(0, limit ? limit : list.length)}
          //style={!edit && cardStyle.list}
          style={ !edit && {...cardStyle.list, marginTop: 0} }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ExpenseListItem item={item} edit={edit} />}
          ItemSeparatorComponent={() => !edit && <ItemSeparator />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExpenseList