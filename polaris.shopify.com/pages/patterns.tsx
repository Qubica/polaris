import {GetStaticProps} from 'next';
import {getResolvedPage} from '../src/components/Editor/utils';
import {
  ResolvedPage,
  ResolvedPageWithBlocks,
} from '../src/components/Editor/types';
import {Grid, GridItem} from '../src/components/Grid';
import Longform from '../src/components/Longform';
import Page from '../src/components/Page';
import {content} from '../src/content';

interface Props {
  page: ResolvedPageWithBlocks;
  patterns: ResolvedPage[];
}

const PatternsIndex = ({page, patterns}: Props) => (
  <Page page={page} showTOC={false}>
    <Longform>
      <p>{page.excerpt}</p>
    </Longform>

    <Grid>
      {patterns.map((pattern) => (
        <GridItem key={pattern.id} {...pattern} />
      ))}
    </Grid>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const {pages} = content;
  const page = pages.find((page) => page.slug === 'patterns');

  if (page) {
    const ResolvedPageWithBlocks = getResolvedPage(content, page, true);
    const patterns: Props['patterns'] = pages
      .filter(({parentId}) => parentId === ResolvedPageWithBlocks.id)
      .map((page) => getResolvedPage(content, page));

    return {
      props: {
        page: ResolvedPageWithBlocks,
        patterns,
      },
    };
  } else {
    return {notFound: true};
  }
};

export default PatternsIndex;
