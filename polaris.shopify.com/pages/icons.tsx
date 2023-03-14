import {GetStaticProps} from 'next';
import {ResolvedPageWithBlocks} from '../src/components/Editor/types';
import {getResolvedPage} from '../src/components/Editor/utils';

import IconsPage from '../src/components/IconsPage';
import {content} from '../src/content';

interface Props {
  page: ResolvedPageWithBlocks;
}

const Components = ({page}: Props) => <IconsPage page={page} />;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const page = content.pages.find(
    ({parentId, slug}) => parentId === null && slug === 'icons',
  );

  if (page) {
    const ResolvedPageWithBlocks = getResolvedPage(content, page, true);
    return {
      props: {page: ResolvedPageWithBlocks},
    };
  } else {
    return {notFound: true};
  }
};

export default Components;
