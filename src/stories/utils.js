import { loremIpsum } from 'lorem-ipsum'
import F from 'futil'

export let optionsFromArray = F.mapIndexed((label, value) => ({ label, value }))

export let lipsum = (count, units) => loremIpsum({ count, units })
