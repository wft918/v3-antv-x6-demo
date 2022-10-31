import FlowGraph from "../../../graph";
import { useIndexStore } from '../../../../../store'

export function nodeOpt(id: any){
    let curCel = null;
    if (id) {
        const { graph } = FlowGraph
        const cell = graph.getCellById(id)
        if (!cell || !cell.isNode()) {
            return
        }
        curCel = cell
        const indexStore = useIndexStore()
        indexStore.updatenodeStroke(cell.attr('body/stroke'))
        indexStore.updatenodeStrokeWidth(cell.attr('body/strokeWidth'))
        indexStore.updatenodeFill(cell.attr('body/fill'))
        indexStore.updatenodeFontSize(cell.attr('text/fontSize'))
        indexStore.updatenodeColor(cell.attr('text/fill'))
        indexStore.updateportId('')
    }
    return curCel;
}
